import axios, { AxiosResponse } from "axios";
import { MailMsg, GithubDownloads, LatestRelease, OBJ } from "./Types";

const spi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

type GithubDownloadsResponse = AxiosResponse<GithubDownloads>;
type GithubDownloadsPromise = Promise<GithubDownloadsResponse>;

type MailMsgResponse = AxiosResponse<MailMsg>;
type MailMsgPromise = Promise<MailMsgResponse>;

type LatestReleaseResponse = AxiosResponse<LatestRelease>;
type LatesteReleasePromise = Promise<LatestReleaseResponse>;

export async function getReleases(repo: string): LatesteReleasePromise {
  return spi.get(`/get_latest?TYPE=${repo}`);
}

export async function getDownloads(repo: string): GithubDownloadsPromise {
  return spi.get(`/downloads?REPO=${repo}`);
}

export async function sendEmail(msgObj: OBJ): MailMsgPromise {
  return spi.post("/mail", msgObj);
}
