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
import { ToastContainer, Zoom } from "react-toastify";
import ScrollToTop from "@components/ScrollToTop";
import Layout from "@modules/Layout";
import { PageView } from "@util/Types";

//* REDUX
import { Provider } from "react-redux";
import store from "@store";

//* MUST be called outside the main App
initializeFontAwesome();

//* Keeping this a standard function on purpose for now...
function MyApp({ Component, pageProps }: AppProps) {
  const { hideNavbar, pageSource, underConstruction } = Component as PageView;

  useEffect(() => {
    document.body.classList.add("body-transition");
  }, []);
  useHashChange();
  useInfoBanner({
    message:
      "stream-pi.com has been rebuilt using React! It may look similar but it is a NEW site with NEW functionality.",
    toastId: "new-site-toast",
    stopShowing: "2022-01-31",
    keysToDelete: [
      "test-toast",
      "theme",
      "AvoInspectorSessionTimestamp",
      "AvoInspectorEvents",
      "AvoInspectorSessionId",
      "AvoInstallationId",
    ],
  });

  return (
    <Provider store={store}>
      <ToastContainer
        transition={Zoom}
        position="top-center"
        enableMultiContainer
      />
      <Layout
        hideNavbar={hideNavbar}
        underConstruction={underConstruction}
        pageSource={pageSource}
      >
        <Component {...pageProps} />
      </Layout>
      {/* For Site Updates - useInfoBanner */}
      <ToastContainer
        position="bottom-center"
        autoClose={false}
        enableMultiContainer
        closeButton={false}
        newestOnTop={true}
        closeOnClick={false}
        containerId={"useInfoBanner"}
      />
      <ScrollToTop />
    </Provider>
  );
}

export default MyApp;
