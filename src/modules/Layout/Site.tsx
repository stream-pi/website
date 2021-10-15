import { FC } from "react";
import { StreamPiNavbar, StreamPiNavItem } from "@modules/Navigation";
import StreamPiFooter from "./Footer";
import ThemeSwitch from "@components/ThemeSwitch";

type LayoutProps = {
  hideNavbar?: boolean;
};

const SiteLayout: FC<LayoutProps> = ({ children, hideNavbar = false }) => {
  return (
    <>
      {!hideNavbar && (
        <StreamPiNavbar>
          <StreamPiNavItem title="Home Page" to="/">
            Home
          </StreamPiNavItem>
          <StreamPiNavItem title="About Page" to="/about">
            About
          </StreamPiNavItem>
          <StreamPiNavItem title="Features Page" to="/features">
            Features
          </StreamPiNavItem>
          <StreamPiNavItem title="Contact Page" to="/contact">
            Contact
          </StreamPiNavItem>
          <StreamPiNavItem title="Install or Download Page" to="/install">
            Install
          </StreamPiNavItem>
          <StreamPiNavItem title="Troubleshooting Page" to="/troubleshooting">
            Troubleshooting
          </StreamPiNavItem>
          <ThemeSwitch />
        </StreamPiNavbar>
      )}
      {children}
      <StreamPiFooter />
    </>
  );
};

export default SiteLayout;
