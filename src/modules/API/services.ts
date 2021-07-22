import { OBJ } from "@util/Types";
import axios from "axios";
import type {
  DownloadCountPromise,
  ReleaseObjectPromise,
  MailMsgPromise,
} from "./types";

export const spi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  validateStatus: (status) => {
    return (status >= 200 && status < 300) || status === 304;
  },
});

/**
 * Function used to handle any query that needs to get information for either the server or the client repo.
 *
 * @param query - The URL query, should only ever be a single query
 * @returns the global variable representing the repository name or "Bad_call"
 */
export function queryParser(query: string | string[]) {
  if (typeof query !== "string") return "Bad_Call";
  switch (query.toUpperCase()) {
    case "CLIENT":
      return "client";
    case "SERVER":
      return "server";
    default:
      return "Bad_Call";
  }
}

export async function sendEmail(msgObj: OBJ): MailMsgPromise {
  return spi.post("/mail", msgObj);
}

export async function getLatestRelease(repo: string): ReleaseObjectPromise {
  return spi.get("/releases/latest", {
    params: {
      REPO: repo,
    },
  });
}

export async function getAllReleases(repo: string) {
  return spi.get("/releases", {
    params: {
      REPO: repo,
    },
  });
}

export async function getDownloads(repo: string): DownloadCountPromise {
  return spi.get("/downloads", {
    params: {
      REPO: repo,
    },
  });
}
