import axios from "axios";
import type { GithubHelper } from "./types";

export const github_api = axios.create({
  baseURL: "https://api.github.com",
  validateStatus: (status) => {
    return (status >= 200 && status < 300) || status === 304;
  },
});

/** Faux cache object */
export const GH: GithubHelper = {
  server: {
    ETag: "",
    Downloads: { TotalDownloads: 0 },
    AllReleases: [],
    LatestRelease: {
      Version: "0.0.0",
      ReleasePage: "N/A",
      Downloads: [],
    },
  },
  client: {
    ETag: "",
    Downloads: { TotalDownloads: 0 },
    AllReleases: [],
    LatestRelease: {
      Version: "0.0.0",
      ReleasePage: "N/A",
      Downloads: [],
    },
  },
};

/** Initial Count prior to 1.0.0 */
export const init_count = {
  client: 1529,
  server: 1650,
};
