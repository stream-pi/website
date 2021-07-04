//* Style
import "animate.css/animate.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../assets/styles/globals.scss";
//* FontAwesome Setup
import { initializeFontAwesome } from "@util/IconLibrary";
//* For now, tried moving this into the above function
// import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false;

//* Core
import type { AppProps } from "next/app";
import { useEffect } from "react";
import useHashChange from "@hooks/useHashChange";
import useInfoBanner from "@hooks/useInfoBanner";
import { ToastContainer } from "react-toastify";
import Container from "react-bootstrap/Container";
import StreamPiNavItem from "@components/Navigation/NavItem";
import StreamPiFooter from "@components/Footer";
import StreamPiNavbar from "@components/Navbar";
import ThemeSwitch from "@components/ThemeSwitch";
import ScrollToTop from "@components/ScrollToTop";
import FooterColumn from "@components/Footer/Column";

//* REDUX
import { Provider } from "react-redux";
import store from "@store";

//* MUST be called outside the main App
initializeFontAwesome();

//* Keeping this a standard function on purpose for now...
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
      <StreamPiFooter>
        <FooterColumn
          header={"Links"}
          links={[
            {
              name: "Documentation",
              href: "https://documentation.stream-pi.com",
            },
            {
              name: "Roadmap",
              href: "https://github.com/orgs/stream-pi/projects/2",
            },
          ]}
        />
        <FooterColumn
          header={"Social"}
          links={[
            {
              name: "Twitter",
              href: "https://twitter.com/stream_pi",
            },
          ]}
        />
        <FooterColumn
          header={"Community"}
          links={[
            {
              name: "Discord",
              href: "https://discord.gg/BExqGmk",
            },
            {
              name: "Matrix",
              href: "https://matrix.to/#/!hTwUYZonUXThjkMhCD:matrix.org?via=matrix.org",
            },
          ]}
        />
      </StreamPiFooter>
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
