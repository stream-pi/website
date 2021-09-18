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
          <StreamPiNavItem to="/">Home</StreamPiNavItem>
          <StreamPiNavItem to="/about">About</StreamPiNavItem>
          <StreamPiNavItem to="/features">Features</StreamPiNavItem>
          <StreamPiNavItem to="/contact">Contact</StreamPiNavItem>
          <StreamPiNavItem to="/install">Install</StreamPiNavItem>
          <StreamPiNavItem to="/troubleshooting">
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
