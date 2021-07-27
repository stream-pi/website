//TODO: Make an API for the developers

import { PersonIcon, TeamMember } from "@util/Types";

export type TeamRowProps = {
  teamMembers: TeamMember[];
  className?: string;
  identifier: string;
  coreTeamRow?: boolean;
};

//* ICON HELPERS *//

export const YouTubeIcon = (url: string): PersonIcon => {
  return {
    IcoPre: "fab",
    IcoName: "youtube",
    description: "YouTube",
    link: url,
  };
};

export const GithubIcon = (url: string): PersonIcon => {
  return { IcoPre: "fab", IcoName: "github", description: "GitHub", link: url };
};

export const TwitterIcon = (url: string): PersonIcon => {
  return {
    IcoPre: "fab",
    IcoName: "twitter",
    description: "Twitter",
    link: url,
  };
};

export const WebsiteIcon = (url: string): PersonIcon => {
  return { IcoPre: "fas", IcoName: "globe", description: "Website", link: url };
};
