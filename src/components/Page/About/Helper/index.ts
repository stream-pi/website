//TODO: Make an API for the developers

import { TeamMember, IconObj } from "@util/Types";
import { ColProps } from "react-bootstrap/Col";
import { Brady, Debayan, Jtoland, Samuel, TOGLK } from "./_CoreTeam";
import { Jordan, Quimo } from "./_Developers";
import { Cerberus } from "./_TestingAuditing";

//* Core
export const CoreDevelopers = [Samuel, Debayan];
export const CoreCommunityRelations = [Brady];
export const CoreUserExperience = [TOGLK];
export const CoreInfrastructure = [Jtoland];

//* NOT core
export const JavaDevelopers = [Quimo, Jordan];
export const TestingAuditing = [Cerberus];

export type TeamRow = {
  teamMembers: TeamMember[];
  className?: string;
  identifier: string;
  coreTeamRow?: boolean;
};

export type SocialBubbleProps = {
  IcoPre: IconObj["IcoPre"];
  IcoName: IconObj["IcoName"];
  text: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
};

export type TeamCardProps = TeamMember & {
  md?: ColProps["md"];
  xs?: ColProps["xs"];
};
