import { FC } from "react";
import Container from "react-bootstrap/Container";
import { StreamPiNavbar, StreamPiNavItem } from "@modules/Navigation";
import StreamPiSEO, { SEOProps } from "./Head";
import FooterColumn from "./Footer/Column";
import StreamPiFooter from "./Footer";
import ThemeSwitch from "@components/ThemeSwitch";
import UnderConstruction from "@components/UnderConstruction";
import Button from "@components/Button";
import Link from "next/link";

type LayoutProps = SEOProps & {
  underConstruction?: boolean;
  hideNavbar?: boolean;
  pageSource?: string;
};

const Layout: FC<LayoutProps> = ({
  children,
  underConstruction = false,
  hideNavbar = false,
  pageSource,
  ...head
}) => {
  //TODO: experiment with having the container use the flex-auto class instead of the main tag
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
      {underConstruction ? (
        <Container
          style={{ paddingTop: "4rem" }}
          className="flex-fill d-flex justify-content-center align-items-center"
          fluid="md"
        >
          <UnderConstruction>
            <div className="d-inline-flex flex-column">
              {pageSource && (
                <Button
                  shape="pill"
                  href={`https://github.com/stream-pi/website/blob/master/src/pages${pageSource.replace(
                    /(.+)(\/[A-Z0-9_-]+\.[A-Z0-9]+$)/gi,
                    "$2"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Page Source
                </Button>
              )}
              <Link href="/" passHref>
                <Button className="mt-2" shape="pill" variant="secondary">
                  Go Home
                </Button>
              </Link>
            </div>
          </UnderConstruction>
        </Container>
      ) : (
        <>
          <Container style={{ paddingTop: "4rem" }} fluid="md">
            {children}
          </Container>
          <main className="flex-fill" />
        </>
      )}
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
