//TODO: Maybe the ETag can be stored in the browser?

import axios, { AxiosResponse } from "axios";
import { LatestRelease, GithubDownloads } from "./Types";

export interface Github {
  url: string;
  assets_url: string;
  upload_url: string;
  html_url: string;
  id: number;
  author: UploaderOrAuthor;
  node_id: string;
  tag_name: string;
  target_commitish: string;
  name: string;
  draft: boolean;
  prerelease: boolean;
  created_at: string;
  published_at: string;
  assets: AssetsEntity[];
  tarball_url: string;
  zipball_url: string;
  body: string;
}

export interface UploaderOrAuthor {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface AssetsEntity {
  url: string;
  id: number;
  node_id: string;
  name: string;
  label?: null;
  uploader: UploaderOrAuthor;
  content_type: string;
  state: string;
  size: number;
  download_count: number;
  created_at: string;
  updated_at: string;
  browser_download_url: string;
}

const github = axios.create({
  baseURL: "https://api.github.com",
});

export type GithubResponse = AxiosResponse<Github[]>;
type GitHubPromise = Promise<GithubResponse>;

class GithubHelper {
  private ETag: string = "";
  private Downloads: GithubDownloads = { "Total Downloads": 0 };
  private ReleaeseInfo: LatestRelease = {
    Version: "0.0.0",
    "Release Page": "N/A",
    Downloads: [],
  };

  public getDownloads() {
    return this.Downloads;
  }

  public getETag() {
    return this.ETag;
  }

  public getReleaseInfo() {
    return this.ReleaeseInfo;
  }

  public setDownloads(data: GithubDownloads) {
    this.Downloads = data;
  }

  public setETag(input: string) {
    if (input !== this.ETag) {
      this.ETag = input;
    }
  }

  public setReleaseInfo(ri: LatestRelease) {
    this.ReleaeseInfo = ri;
  }
}

export const GH = new GithubHelper();

export async function getGithub(repo: string): GitHubPromise {
  const owner = process.env.NEXT_PUBLIC_REPO_OWNER;
  return github.get(`/repos/${owner}/${repo}/releases`, {
    headers: { "If-None-Match": GH.getETag() },
    auth: {
      username: process.env.GITHUB_USR,
      password: process.env.GITHUB_KEY,
    },
  });
}

// export function checkEtag(_ETag: string) {
//   if (_ETag !== ETag) {
//     ETag = _ETag;
//   }
// }

// export function getData() {
//   return data;
// }

// export function setData(_data: { "Total Downloads": number }) {
//   data = _data;
// }
