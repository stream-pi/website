import { AxiosResponse } from "axios";

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

export type GithubResponse = AxiosResponse<Github[]>;
export type GitHubPromise = Promise<GithubResponse>;

export type GithubDownloads = { TotalDownloads: number };

export type ReleaseObject = {
  Version: string;
  ReleasePage: string;
  Downloads: { Name: string; Link: string }[];
};
type HelperObj = {
  ETag: string;
  Downloads: GithubDownloads;
  AllReleases: ReleaseObject[];
  LatestRelease: ReleaseObject;
};
export type GithubHelper = {
  server: HelperObj;
  client: HelperObj;
};
