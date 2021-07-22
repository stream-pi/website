import { AxiosResponse } from "axios";
import { GithubDownloads, ReleaseObject } from "./github/types";

export type MailMsg = { title: string; long_msg?: string };
export type MailMsgResponse = AxiosResponse<MailMsg>;
export type MailMsgPromise = Promise<MailMsgResponse>;

export type DownloadCountResponse = AxiosResponse<GithubDownloads>;
export type DownloadCountPromise = Promise<DownloadCountResponse>;

export type ReleaseObjectResponse = AxiosResponse<ReleaseObject>;
export type ReleaseObjectPromise = Promise<ReleaseObjectResponse>;
