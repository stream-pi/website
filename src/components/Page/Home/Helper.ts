import type { IconObj, ButtonObj } from "@util/Types";

type HomeObj = {
  icons: IconObj[];
  buttons: ButtonObj[];
  extraClass?: string[];
};

export const KIT: HomeObj = {
  icons: [
    { IcoPre: "fab", IcoName: "discord" },
    { IcoPre: "fab", IcoName: "twitter" },
  ],
  buttons: [
    { text: "Join the Discord", link: "https://discord.gg/BExqGmk" },
    { text: "Visit our Twitter", link: "https://twitter.com/stream_pi" },
  ],
  extraClass: ["mr-2", "ml-2"],
};

export const ICF: HomeObj = {
  icons: [{ IcoPre: "fab", IcoName: "github" }],
  buttons: [
    { text: "Check out the Github", link: "https://github.com/stream-pi/" },
  ],
};

export const MIJ: HomeObj = {
  icons: [{ IcoPre: "fab", IcoName: "java" }],
  buttons: [
    { text: "See how it's made", link: "/about#technology", internal: true },
  ],
};

export const HomeInfo = {
  KIT,
  ICF,
  MIJ,
};
