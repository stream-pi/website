import type {
  IconPrefix,
  IconName,
} from "@fortawesome/fontawesome-common-types";

export type IconObj = {
  IcoPre: IconPrefix;
  IcoName: IconName;
};

export type PersonIcon = IconObj & {
  description: string;
  link: string;
};

export type TeamMember = {
  name: string;
  picture: string;
  icons: PersonIcon[];
};

export type GithubDownloads = { TotalDownloads: number };

export type MailMsg = { title: string; long_msg?: string };

export type ReleaseDownloads = { Name: string; Link: string };

export type LatestRelease = {
  Version: string;
  ReleasePage: string;
  Downloads: ReleaseDownloads[];
};

export type OBJ = Record<string, any>;
