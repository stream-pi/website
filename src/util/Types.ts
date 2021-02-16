import { IconPrefix, IconName } from "@fortawesome/fontawesome-common-types";

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

export interface Github {
  url: string;
  assets_url: string;
  upload_url: string;
  html_url: string;
  id: number;
  author: UploaderOrAuthor;
  node_id: string;
  tag_name: string;
  target_commitish: string;
  name: string;
  draft: boolean;
  prerelease: boolean;
  created_at: string;
  published_at: string;
  assets: AssetsEntity[];
  tarball_url: string;
  zipball_url: string;
  body: string;
}

export interface UploaderOrAuthor {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface AssetsEntity {
  url: string;
  id: number;
  node_id: string;
  name: string;
  label?: null;
  uploader: UploaderOrAuthor;
  content_type: string;
  state: string;
  size: number;
  download_count: number;
  created_at: string;
  updated_at: string;
  browser_download_url: string;
}
