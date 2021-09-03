import type {
  IconPrefix,
  IconName,
} from "@fortawesome/fontawesome-common-types";
import { NextPage } from "next";

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

export type OBJ = Record<string, any>;

// eslint-disable-next-line @typescript-eslint/ban-types
export type PageView<T = {}> = NextPage<T> & {
  hideNavbar?: boolean;
  underConstruction?: boolean;
  pageSource?: string;
};
