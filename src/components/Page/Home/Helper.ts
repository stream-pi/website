// TODO: Replace function params with translation function as param

import type { IconObj, ButtonObj } from "@util/Types";

type HomeObj = {
  icons: IconObj[];
  buttons: ButtonObj[];
  extraClass?: string[];
};

export type HomeCardProps = {
  icons: IconObj[];
  buttons: ButtonObj[];
  title: string;
  extraClass?: string[];
};

/** Keep In Touch */
export const KIT = (joinDiscord: string, joinTwitter: string): HomeObj => {
  return {
    icons: [
      { IcoPre: "fab", IcoName: "discord" },
      { IcoPre: "fab", IcoName: "twitter" },
    ],
    buttons: [
      { text: joinDiscord, link: "https://discord.gg/BExqGmk" },
      { text: joinTwitter, link: "https://twitter.com/stream_pi" },
    ],
    extraClass: ["mr-2", "ml-2"],
  };
};

/** Its completely free */
export const ICF = (github: string): HomeObj => {
  return {
    icons: [{ IcoPre: "fab", IcoName: "github" }],
    buttons: [{ text: github, link: "https://github.com/stream-pi/" }],
  };
};

/** Made in JavaFX */
export const MIJ = (seeHowMade: string): HomeObj => {
  return {
    icons: [{ IcoPre: "fab", IcoName: "java" }],
    buttons: [{ text: seeHowMade, link: "/about#technology", internal: true }],
  };
};
