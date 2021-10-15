import { FC } from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import UnderConstruction from "@components/UnderConstruction";
import Button from "@components/Button";
import StreamPiSEO, { SEOProps } from "./Head";

type PageProps = SEOProps & {
  underConstruction?: boolean;
  pageSource?: string;
  containerClasses?: string;
};

const PageLayout: FC<PageProps> = ({
  children,
  underConstruction = false,
  pageSource,
  containerClasses,
  ...head
}) => {
  return (
    //TODO: experiment with having the container use the flex-fill class instead of the main tag
    <>
      <StreamPiSEO {...head} />
      {underConstruction ? (
        <Container
          as="main"
          id="stream-pi-page-content"
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
          <Container
            as="main"
            id="stream-pi-page-content"
            className={containerClasses}
            style={{ paddingTop: "4rem" }}
            fluid="md"
          >
            {children}
          </Container>
          <span className="flex-fill" />
        </>
      )}
    </>
  );
};

export default PageLayout;
