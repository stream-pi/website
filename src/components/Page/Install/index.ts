export { default as MarkdownLayout } from "./_MarkdownLayout";
export { default as InstallNav } from "./_InstallNav";
import Server from "./Helper/server";
import Client from "./Helper/client";
import type { LatestRelease } from "@util/Types";

export type Releases = { Client: LatestRelease; Server: LatestRelease };

export { Client, Server };
