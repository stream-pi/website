//* Core
import "animate.css/animate.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../assets/styles/globals.scss";
import type { AppProps } from "next/app";
import { library, config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import {
  faDiscord,
  faGithub,
  faTwitter,
  faYoutube,
  faJava,
  faPatreon,
  faRaspberryPi,
} from "@fortawesome/free-brands-svg-icons";
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
} from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import { useHashChange } from "@util";
import { useInfoBanner } from "@util/InfoBanner";
import StreamPiNavItem from "@components/Navigation/NavItem";
import StreamPiFooter from "@components/Footer";
import StreamPiNavbar from "@components/Navbar";
import ThemeSwitch from "@components/ThemeSwitch";
import ScrollToTop from "@components/ScrollToTop";
import { useEffect } from "react";

library.add(
  faRaspberryPi,
  faDiscord,
  faGithub,
  faTwitter,
  faYoutube,
  faJava,
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
  faAngleDown
);

//* REDUX
import { Provider } from "react-redux";
import store from "src/store";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList.add("body-transition");
  }, []);
  useHashChange();
  useInfoBanner({
    message:
      "stream-pi.com has been rebuilt using React! It may look similar but it is a NEW site with NEW functionality.",
    toastId: "new-site-toast",
    stopShowing: "2022-01-31",
    keysToDelete: ["test-toast", "theme"],
  });

  return (
    <Provider store={store}>
      <ToastContainer position="top-center" enableMultiContainer />
      <StreamPiNavbar>
        <StreamPiNavItem to="/">Home</StreamPiNavItem>
        <StreamPiNavItem to="/about">About</StreamPiNavItem>
        <StreamPiNavItem to="/features">Features</StreamPiNavItem>
        <StreamPiNavItem to="/contact">Contact</StreamPiNavItem>
        <StreamPiNavItem to="/install">Install</StreamPiNavItem>
        <StreamPiNavItem to="/troubleshooting">Troubleshooting</StreamPiNavItem>
        <ThemeSwitch />
      </StreamPiNavbar>
      <Container style={{ paddingTop: "4rem" }} fluid="md">
        <Component {...pageProps} />
      </Container>
      <StreamPiFooter />
      {/* For Site Updates */}
      <ToastContainer
        position="bottom-center"
        autoClose={false}
        enableMultiContainer
        closeButton={false}
        newestOnTop={true}
        closeOnClick={false}
        containerId={"BannerToasts"}
      />
      <ScrollToTop />
    </Provider>
  );
}

export default MyApp;
