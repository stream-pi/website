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

export type OBJ = Record<string, any>;
