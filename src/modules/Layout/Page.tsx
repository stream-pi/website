import { FC, memo } from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import UnderConstruction from "@components/UnderConstruction";
import Button from "@components/Button";
import StreamPiSEO, { SEOProps } from "./Head";
import classNames from "classnames";

type PageProps = SEOProps & {
  underConstruction?: boolean;
  pageSource?: string;
  containerClasses?: string;
  hideNavbar?: boolean;
};

// eslint-disable-next-line react/display-name
const UnderConstructionView = memo<{ pageSource?: string }>(
  ({ pageSource }) => {
    return (
      <Container
        as="main"
        id="stream-pi-page-content"
        style={{ paddingTop: "4rem" }}
        className="flex-grow-1 d-flex justify-content-center align-items-center"
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
    );
  }
);

const PageLayout: FC<PageProps> = ({
  children,
  underConstruction = false,
  pageSource,
  containerClasses,
  ...head
}) => {
  return (
    <>
      <StreamPiSEO {...head} />
      {underConstruction ? (
        <UnderConstructionView pageSource={pageSource} />
      ) : (
        <Container
          as="main"
          id="stream-pi-page-content"
          className={classNames("flex-grow-1", containerClasses)}
          style={{ paddingTop: "4rem" }}
          fluid="md"
        >
          {children}
        </Container>
      )}
    </>
  );
};

export default PageLayout;
