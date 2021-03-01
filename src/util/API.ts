import axios, { AxiosResponse } from "axios";

const spi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

type GithubDownloads = AxiosResponse<{ "Total Downloads": number }>;
type GithubDownloadsPromise = Promise<GithubDownloads>;

type MailMsgResponse = AxiosResponse<{ title: string; long_msg: string }>;
type MailMsgPromise = Promise<MailMsgResponse>;

export type LatestRelease = {
  Version: string;
  "Release Page": string;
  Downloads: { Name: string; Link: string }[];
};
type LatestReleaseResponse = AxiosResponse<LatestRelease>;
type LatesteReleasePromise = Promise<LatestReleaseResponse>;

export async function getReleases(repo: string): LatesteReleasePromise {
  return spi.get(`/get_latest?TYPE=${repo}`);
}

export async function getDownloads(repo: string): GithubDownloadsPromise {
  return spi.get(`/downloads?REPO=${repo}`);
}

export async function sendEmail<T extends object>(msgObj: T): MailMsgPromise {
  return spi.post("/mail", msgObj);
}
