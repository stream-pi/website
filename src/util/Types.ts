import { IconPrefix, IconName } from "@fortawesome/fontawesome-common-types";

export type ButtonObj = {
  text: string;
  link: string;
  internal?: boolean;
};

export type IconObj = {
  type: IconPrefix;
  name: IconName;
};

export class PersonIcon implements IconObj {
  constructor(
    public type: IconPrefix,
    public name: IconName,
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
