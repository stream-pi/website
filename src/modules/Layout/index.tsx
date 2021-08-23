import { FC } from "react";
import Container from "react-bootstrap/Container";
import { StreamPiNavbar, StreamPiNavItem } from "@modules/Navigation";
import StreamPiSEO, { SEOProps } from "./Head";
import FooterColumn from "./Footer/Column";
import StreamPiFooter from "./Footer";
import ThemeSwitch from "@components/ThemeSwitch";

type LayoutProps = SEOProps & {
  underConstruction?: boolean;
  hideNavbar?: boolean;
};

const Layout: FC<LayoutProps> = ({
  children,
  underConstruction = false,
  hideNavbar = false,
  ...head
}) => {
  return (
    <>
      <StreamPiSEO {...head} />
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
      <Container style={{ paddingTop: "4rem" }} fluid="md">
        {underConstruction ? <></> : children}
      </Container>
      <main className="flex-fill" />
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

export default Layout;
