import { GH, github_api, init_count } from "./constants";
import type { GitHubPromise, GithubResponse } from "./types";

export async function getGithub(repo: "server" | "client"): GitHubPromise {
  let auth: any = undefined;
  const owner = process.env.NEXT_PUBLIC_REPO_OWNER;
  //* Check to see if github credentials exist
  if (process.env.GITHUB_USR && process.env.GITHUB_KEY) {
    auth = {
      username: process.env.GITHUB_USR,
      password: process.env.GITHUB_KEY,
    };
  }

  return github_api.get(`/repos/${owner}/${repo}/releases`, {
    headers: { "If-None-Match": GH[repo].ETag },
    auth: auth,
  });
}

export const sumTotalDownloads = (response: GithubResponse) => {
  const num_arr: number[] = response.data.map((item) => {
    return item.assets.reduce((a, b) => a + b.download_count, 0);
  });
  return num_arr.reduce((a, b) => a + b);
};

export const createReleaseList = (response: GithubResponse) => {
  const final = response.data.map((gh) => {
    return {
      Version: gh.tag_name,
      ReleasePage: gh.html_url,
      Downloads: gh.assets.map((asset) => {
        return {
          Name: asset.name,
          Link: asset.browser_download_url,
        };
      }),
    };
  });

  return final;
};

export const callGithubAndUpdateCache = async (repo: "server" | "client") => {
  const response = await getGithub(repo);

  if (response.status === 304) {
    return {
      AllReleases: GH[repo].AllReleases,
      Downloads: GH[repo].Downloads,
      LatestRelease: GH[repo].LatestRelease,
    };
  }

  const all_releases = createReleaseList(response);
  const total_downloads = {
    TotalDownloads: sumTotalDownloads(response) + init_count[repo],
  };

  GH[repo].Downloads = total_downloads;
  GH[repo].ETag = response.headers.etag;
  GH[repo].AllReleases = [...all_releases];
  GH[repo].LatestRelease = { ...all_releases[0] };

  return {
    AllReleases: all_releases,
    Downloads: total_downloads,
    LatestRelease: all_releases[0],
  };
};
