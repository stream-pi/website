import axios, { AxiosResponse } from "axios";
import { Github } from "./Types";

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
