import type {
  IconPrefix,
  IconName,
} from "@fortawesome/fontawesome-common-types";

export type ButtonObj = {
  text: string;
  link: string;
  internal?: boolean;
};

export type IconObj = {
  IcoPre: IconPrefix;
  IcoName: IconName;
};

export class PersonIcon {
  constructor(
    public IcoPre: IconPrefix,
    public IcoName: IconName,
    public description: string,
    public link: string
  ) {}
}

export type TeamMember = {
  name: string;
  picture: string;
  icons: PersonIcon[];
};

export class MyIconHelper {
  static YouTubeIcon = (url: string) => {
    return new PersonIcon("fab", "youtube", "YouTube", url);
  };

  static GithubIcon = (url: string) => {
    return new PersonIcon("fab", "github", "GitHub", url);
  };

  static TwitterIcon = (url: string) => {
    return new PersonIcon("fab", "twitter", "Twitter", url);
  };
}

export type GithubDownloads = { "Total Downloads": number };

export type MailMsg = { title: string; long_msg: string };

export type ReleaseDownloads = { Name: string; Link: string };

export type LatestRelease = {
  Version: string;
  "Release Page": string;
  Downloads: ReleaseDownloads[];
};

export type OBJ = Record<string, unknown>;
