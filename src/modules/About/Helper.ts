import type { IconObj } from "@util/Types";

export type PersonIcon = IconObj & {
  description: string;
  link: string;
};

export type TeamMember = {
  name: string;
  picture: string;
  icons: PersonIcon[];
};

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
//* ICON HELPERS END *//
//* -------------------- *//
//* Core Team Start *//
const Samuel: TeamMember = {
  name: "Samuel Quinones",
  picture: "/images/team/sampic.png",
  icons: [
    TwitterIcon("https://twitter.com/SamuelQuinones1"),
    GithubIcon("https://github.com/SamuelQuinones"),
    YouTubeIcon("http://corporalsaturn.com/"),
    WebsiteIcon("https://samtheq.com"),
  ],
};
const Debayan: TeamMember = {
  name: "Debayan Sutradhar",
  picture: "/images/team/defpic.png",
  icons: [
    TwitterIcon("https://twitter.com/rnayabed"),
    GithubIcon("https://github.com/rnayabed/"),
    YouTubeIcon("https://www.youtube.com/channel/UCuMkj5u1wC70KtuXWHLTfkQ"),
    WebsiteIcon("https://rnayabed.github.io/"),
  ],
};
// CR / User Experience
const TOGLK: TeamMember = {
  name: "Toglk",
  picture: "/images/team/togpic.png",
  icons: [GithubIcon("https://github.com/TOGLK")],
};
// Infrastructure
const Jtoland: TeamMember = {
  name: "Jason Toland",
  picture: "/images/team/defpic.png",
  icons: [GithubIcon("https://github.com/jtoland")],
};
//* ARRAYS *//
export const CoreDevelopers = [Samuel, Debayan];
export const CoreUserExperience = [TOGLK];
export const CoreInfrastructure = [Jtoland];
//* Core Team End *//

//* ------------------ *//

//* Developers - NON CORE *//
// Java
const Quimo: TeamMember = {
  name: "Quimo",
  picture: "/images/team/quimopic.jpg",
  icons: [GithubIcon("https://github.com/quimodotcom")],
};
// Java, Web
const Jordan: TeamMember = {
  name: "j4ckofalltrades",
  picture: "/images/team/jordanpic.png",
  icons: [
    GithubIcon("https://github.com/j4ckofalltrades"),
    WebsiteIcon("https://jduabe.dev/"),
  ],
};
// Web
const DMF: TeamMember = {
  name: "dmf444",
  picture: "/images/team/dmf444pic.png",
  icons: [GithubIcon("https://github.com/dmf444")],
};
//* ARRAYS *//
export const JavaDevelopers = [Quimo, Jordan];
export const WebDevelopers = [DMF];
//* Developers - NON CORE END *//

//* ------------------ *//

//* Testing & Auditing - NON CORE *//
const Cerberus: TeamMember = {
  name: "Cerberus",
  picture: "/images/team/cerberuspic.png",
  icons: [],
};
const Norvilles: TeamMember = {
  name: "NorvillesDingus",
  picture: "/images/team/norvillespic.jpg",
  icons: [],
};
//* ARRAYS *//
export const TestingAuditing = [Cerberus, Norvilles];
//* Testing & Auditing - NON CORE END *//

//* ------------------ *//
