//TODO: When the Stream-Pi repos become public, change the /project paths

type ExternalMaster = {
  [x: string]: {
    name: string;
    link: string
  }
}

const releaseURL = (repo: string) =>
  `https://github.com/${process.env.NEXT_PUBLIC_REPO_OWNER}/${repo}/releases`;

/** External Routes */
export const ExternalObjs: ExternalMaster = {
  github: {
    name: "Github",
    link: "https://github.com/Stream-Pi/",
  },
  roadmap: {
    name: "Roadmap",
    link: "https://github.com/orgs/Stream-Pi/projects/2",
  },
  server: {
    name: "Server Page",
    link: releaseURL(process.env.NEXT_PUBLIC_SERVER_REPO),
  },
  client: {
    name: "Client Page",
    link: releaseURL(process.env.NEXT_PUBLIC_CLIENT_REPO),
  },
  patreon: {
    name: "Patreon",
    link: "https://www.patreon.com/streampi",
  },
};

export const ExternalPaths = new Set(Object.keys(ExternalObjs));
