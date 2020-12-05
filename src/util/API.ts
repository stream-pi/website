import axios, { AxiosResponse } from "axios";

/* GITHUB START */
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
/* GITHUB END */

const github = axios.create({
  baseURL: "https://api.github.com",
});

const spi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE,
});

export type GithubResponse = AxiosResponse<Github[]>;
type GitHubPromise = Promise<GithubResponse>;
type GithubDownloads = AxiosResponse<{ "Total Downloads": number }>;
type GithubDownloadsPromise = Promise<GithubDownloads>;

export async function getGithub(repo: string): GitHubPromise {
  const owner = process.env.NEXT_PUBLIC_REPO_OWNER;
  return github.get(`/repos/${owner}/${repo}/releases`);
}

export async function getDownloads(repo: string): GithubDownloadsPromise {
  return spi.get(`/downloads?REPO=${repo}`);
}

export async function sendEmail<T extends object>(msgObj: T) {
  return spi.post("/mail", msgObj);
}
