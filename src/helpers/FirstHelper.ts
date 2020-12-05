const defpic = "/images/defpic.png";
import { chunkArray } from "@util";

export type FirstCard = {
  cardTitle: string;
  img: string;
  description: string;
};

export const FirstItems: FirstCard[] = [
  {
    cardTitle: "Folders",
    img: defpic,
    description:
      "Create Folders to store other sets of actions. Want one screen for OBS and another for running scripts? Use Folders!",
  },
  {
    cardTitle: "Hot Keys",
    img: defpic,
    description:
      "Want to be able to be able to have a button that can screenshot? Want a button that can type LMAO and hit enter for you? Use Hot Keys!",
  },
  {
    cardTitle: "Twitter",
    img: defpic,
    description:
      'Want to be able to send tweets with the push of a button? Want to be able to easily tweet out streams or ask for a "Vibe Check"? Use the tweet button! (Requires Twitter Sign in)',
  },
  {
    cardTitle: "Website",
    img: defpic,
    description:
      "You already know about this one! Want to make a button that can go to a url? Use Websites!",
  },
  {
    cardTitle: "Launch",
    img: defpic,
    description:
      "Want to have a button that can launch your favorite game or music streaming software? Use Launch!",
  },
  {
    cardTitle: "Script",
    img: defpic,
    description:
      "Easy way to invoke command line and run given files. Got SH or CMD or BAT files you need to run? Use Scripts!",
  },
  {
    cardTitle: "OBS",
    img: defpic,
    description:
      "No longer will you have to configure every action to a Hot Key. StreamPi can control OBS completely! (Requires OBS Socket Plugin)",
  },
];

export const ChunkedFirst = chunkArray(FirstItems, 3);
