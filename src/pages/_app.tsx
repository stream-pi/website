import "animate.css/animate.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../assets/styles/globals.scss";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
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
import { setThemeConfig } from "@theme";
import { ExternalPaths } from "@helpers/ExternalHelper";
import { useInfoBanner } from "@components/InfoBanner";
import StreamPiFooter from "@StreamPi/Footer";
import StreamPiNavbar from "@StreamPi/Navbar";
import StreamPiNavItem from "@StreamPi/NavItem";
import ThemeSwitch from "@components/ThemeSwitch";

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

declare global {
  namespace NodeJS {
    interface Global {
      isLightMode: boolean;
    }
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const [path, setPath] = useState("");
  const [theme, setTheme] = useState("dark");
  useHashChange();
  useInfoBanner({
    message:
      "stream-pi.com has been rebuilt using React! It may look the same but it is a NEW site with NEW functionality.",
    toastId: "new-site-toast",
    stopShowing: "2021-05-30",
    keyToDelete: "test-toast",
  });
  const router = useRouter();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setPath(router.asPath);
      setTheme(() => {
        const theme = localStorage.getItem("theme") || "dark";
        global.isLightMode = theme === "light";
        return theme;
      });
    }
    return () => {
      mounted = false;
    };
  }, []); /* eslint-disable-line react-hooks/exhaustive-deps */

  const toggleTheme = () => {
    setTheme((prev) => {
      const theme = prev === "light" ? "dark" : "light";
      setThemeConfig(theme);
      global.isLightMode = theme === "light";
      return theme;
    });
  };

  return (
    <>
      <ToastContainer position="top-center" enableMultiContainer />
      {!ExternalPaths.has(path.replace(/\/+/gm, "")) && (
        <StreamPiNavbar navVariant={theme as "light" | "dark"}>
          <StreamPiNavItem to="/">Home</StreamPiNavItem>
          <StreamPiNavItem to="/about">About</StreamPiNavItem>
          <StreamPiNavItem to="/features">Features</StreamPiNavItem>
          <StreamPiNavItem to="/contact">Contact</StreamPiNavItem>
          <StreamPiNavItem to="/install">Install</StreamPiNavItem>
          <StreamPiNavItem to="/troubleshooting">
            Troubleshooting
          </StreamPiNavItem>
          <ThemeSwitch propClick={toggleTheme} theme={theme} />
        </StreamPiNavbar>
      )}
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
    </>
  );
}

export default MyApp;
