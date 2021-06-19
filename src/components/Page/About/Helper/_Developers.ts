import { MyIconHelper, TeamMember } from "@util/Types";

const quimopic = "/images/team/quimopic.jpg";
const jordanpic = "/images/team/jordanpic.png";

const { GithubIcon, WebsiteIcon } = MyIconHelper;

//* Java Devs *//
export const Quimo: TeamMember = {
  name: "Quimo",
  picture: quimopic,
  icons: [GithubIcon("https://github.com/quimodotcom")],
};
export const Jordan: TeamMember = {
  name: "j4ckofalltrades",
  picture: jordanpic,
  icons: [
    GithubIcon("https://github.com/j4ckofalltrades"),
    WebsiteIcon("https://jduabe.dev/"),
  ],
};
