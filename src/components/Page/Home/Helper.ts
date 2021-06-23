// TODO: Replace function params with translation function as param

import type { IconObj } from "@util/Types";

type ButtonObj = {
  text: string;
  link: string;
  internal?: boolean;
};

type HomeObj = {
  icons: IconObj[];
  buttons: ButtonObj[];
};

export type HomeCardProps = HomeObj & {
  title: string;
};

/** Cross Platform */
export const CP = (downloadNow: string): HomeObj => {
  return {
    icons: [
      { IcoPre: "fas", IcoName: "desktop" },
      { IcoPre: "fas", IcoName: "mobile-alt" },
    ],
    buttons: [{ text: downloadNow, link: "/install", internal: true }],
  };
};

/** Free and Open Source */
export const FOS = (github: string): HomeObj => {
  return {
    icons: [{ IcoPre: "fab", IcoName: "github" }],
    buttons: [{ text: github, link: "https://github.com/stream-pi/" }],
  };
};

/** Highly Modular */
export const HM = (seeHowMade: string, seeHowWorks: string): HomeObj => {
  return {
    icons: [{ IcoPre: "fas", IcoName: "cubes" }],
    buttons: [
      { text: seeHowMade, link: "/about#how-its-made", internal: true },
      { text: seeHowWorks, link: "/about#how-it-works", internal: true },
    ],
  };
};
