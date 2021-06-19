import { MyIconHelper, TeamMember } from "@util/Types";

//* Core Team
const sampic = "/images/team/sampic.png";
const defaultpic = "/images/team/defpic.png";
const togpic = "/images/team/togpic.png";
const brapic = "/images/team/brapic.jpg";

const { TwitterIcon, GithubIcon, YouTubeIcon, WebsiteIcon } = MyIconHelper;

export const Samuel: TeamMember = {
  name: "Samuel Quinones",
  picture: sampic,
  icons: [
    TwitterIcon("https://twitter.com/SamuelQuinones1"),
    GithubIcon("https://github.com/SamuelQuinones"),
    YouTubeIcon("http://corporalsaturn.com/"),
    WebsiteIcon("https://samtheq.com"),
  ],
};

export const Debayan: TeamMember = {
  name: "Debayan Sutradhar",
  picture: defaultpic,
  icons: [
    TwitterIcon("https://twitter.com/rnayabed"),
    GithubIcon("https://github.com/rnayabed/"),
    YouTubeIcon("https://www.youtube.com/channel/UCuMkj5u1wC70KtuXWHLTfkQ"),
  ],
};

// CR / User Experience
export const TOGLK: TeamMember = {
  name: "Toglk",
  picture: togpic,
  icons: [GithubIcon("https://github.com/TOGLK")],
};

export const Brady: TeamMember = {
  name: "Brady",
  picture: brapic,
  icons: [GithubIcon("https://github.com/Brady-StreamPi")],
};

// Infrastructure
export const Jtoland: TeamMember = {
  name: "Jason Toland",
  picture: defaultpic,
  icons: [GithubIcon("https://github.com/jtoland")],
};
