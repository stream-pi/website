//* Core
import { config, library } from "@fortawesome/fontawesome-svg-core";
//* Brands
import {
  faDiscord,
  faGithub,
  faTwitter,
  faYoutube,
  faPatreon,
  faRaspberryPi,
} from "@fortawesome/free-brands-svg-icons";
//* Solid
import {
  faGlobe,
  faEnvelope,
  faQuestionCircle,
  faComment,
  faMoon,
  faSun,
  faUser,
  faDownload,
  faSearch,
  faAngleDown,
  faAngleUp,
  faCubes,
  faDesktop,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Sets up`FontAwesome` to be used in NextJS
 * - sets `autoAddCss` to false
 * - adds all of the imported icons to the app library
 */
export const initializeFontAwesome = () => {
  config.autoAddCss = false;
  library.add(
    faRaspberryPi,
    faDiscord,
    faGithub,
    faTwitter,
    faYoutube,
    faPatreon,
    faGlobe,
    faEnvelope,
    faQuestionCircle,
    faComment,
    faMoon,
    faSun,
    faUser,
    faDownload,
    faSearch,
    faAngleUp,
    faAngleDown,
    faCubes,
    faDesktop,
    faMobileAlt
  );
};
