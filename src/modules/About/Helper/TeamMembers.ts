import { TeamMember } from "@util/Types";
import { GithubIcon, TwitterIcon, WebsiteIcon, YouTubeIcon } from ".";

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
  ],
};
// CR / User Experience
const TOGLK: TeamMember = {
  name: "Toglk",
  picture: "/images/team/togpic.png",
  icons: [GithubIcon("https://github.com/TOGLK")],
};
//* Sorry Brady...
// const Brady: TeamMember = {
//   name: "Brady",
//   picture: "/images/team/brapic.jpg",
//   icons: [GithubIcon("https://github.com/Brady-StreamPi")],
// };
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
//* ARRAYS *//
export const JavaDevelopers = [Quimo, Jordan];
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
const Grand: TeamMember = {
  name: "Grand",
  picture: "/images/team/grandpic.png",
  icons: [],
};
//* ARRAYS *//
export const TestingAuditing = [Cerberus, Norvilles, Grand];
//* Testing & Auditing - NON CORE END *//

//* ------------------ *//
