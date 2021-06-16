export type ExtParams = {
  params: {
    ext: string;
  };
};

export type ExtProps = {
  pageData: {
    name: string;
    link: string;
    ext: string;
  };
};

type ExternalMaster = {
  [x: string]: {
    name: string;
    link: string;
  };
};

const releaseURL = (repo: string) =>
  `https://github.com/${process.env.NEXT_PUBLIC_REPO_OWNER}/${repo}/releases`;

/** External Routes */
export const ExternalObjs: ExternalMaster = {
  github: {
    name: "Github",
    link: "https://github.com/stream-pi/",
  },
  roadmap: {
    name: "Roadmap",
    link: "https://github.com/orgs/stream-pi/projects/2",
  },
  server: {
    name: "Server Page",
    link: releaseURL("server"),
  },
  client: {
    name: "Client Page",
    link: releaseURL("client"),
  },
  patreon: {
    name: "Patreon",
    link: "https://www.patreon.com/streampi",
  },
};
