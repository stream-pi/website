import { FC } from "react";
import { StreamPiNavbar, StreamPiNavItem } from "@modules/Navigation";
import FooterColumn from "./Footer/Column";
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
    </>
  );
};

export default SiteLayout;
