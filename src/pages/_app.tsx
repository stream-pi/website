//* Style
import "animate.css/animate.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../assets/styles/app.scss";
//* FontAwesome Setup
import { initializeFontAwesome } from "@util/IconLibrary";
//* For now, tried moving this into the above function
// import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false;

//* Core
import type { AppProps } from "next/app";
import type { PageView } from "@util/Types";
import useHashChange from "@hooks/useHashChange";
import useInfoBanner from "@hooks/useInfoBanner";
import useResetFocus from "@hooks/useResetFocus";
import { ToastContainer, Zoom } from "react-toastify";
import ScrollToTop from "@components/ScrollToTop";
import SiteLayout from "@modules/Layout/Site";

//* MUST be called outside the main App
initializeFontAwesome();

//* Keeping this a standard function on purpose for now...
function MyApp({ Component, pageProps }: AppProps) {
  useHashChange();
  useResetFocus();
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
    <>
      <ToastContainer
        transition={Zoom}
        position="top-center"
        enableMultiContainer
      />
      <SiteLayout hideNavbar={(Component as PageView).hideNavbar}>
        <Component {...pageProps} />
      </SiteLayout>
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
    </>
  );
}

export default MyApp;
