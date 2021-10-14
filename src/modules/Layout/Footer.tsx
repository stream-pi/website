import { memo } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import LegalInfoModal from "@components/Modals/TermsOfUse";
import Link from "next/link";

const StreamPiFooter = memo(() => {
  const currentYear = new Date().getFullYear();

  const commonLinks = { target: "_blank", rel: "noopener noreferrer" };

  return (
    <footer className="footer pt-4 pb-2 mt-2">
      <Container>
        <Row>
          {/* Basic info */}
          <Col style={{ fontSize: "0.9rem" }} className="mb-3 mb-lg-0" lg="6">
            <span className="mb-1 d-block">
              &copy; 2019 - {currentYear}, Stream-Pi Group and its Affiliates
            </span>
            <span className="mb-1">
              <LegalInfoModal />
            </span>
            <span className="mb-0 d-block">
              Website Version{" "}
              <strong>{process.env.NEXT_PUBLIC_WEB_VERSION}</strong>
            </span>
          </Col>
          {/* Basic Info End */}
          {/* Link Columns - Column 1 */}
          <Col style={{ fontSize: "0.9rem" }} xs="6" sm="4" lg="2">
            <h6>Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="https://documentation.stream-pi.com" {...commonLinks}>
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/orgs/stream-pi/projects/2"
                  {...commonLinks}
                >
                  Roadmap
                </a>
              </li>
            </ul>
          </Col>
          {/* Link Columns - END */}
          {/* Social Media - Column 2 */}
          <Col style={{ fontSize: "0.9rem" }} xs="6" sm="4" lg="2">
            <h6>Social</h6>
            <ul className="list-unstyled">
              <li>
                <a href="http://twitter.com/stream_pi" {...commonLinks}>
                  Twitter
                </a>
              </li>
            </ul>
          </Col>
          {/* Social Media - END */}
          {/* Community - Column 3 */}
          <Col style={{ fontSize: "0.9rem" }} xs="6" sm="4" lg="2">
            <h6>Community</h6>
            <ul className="list-unstyled">
              <li>
                <a href="https://discord.gg/BExqGmk" {...commonLinks}>
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://matrix.to/#/!hTwUYZonUXThjkMhCD:matrix.org?via=matrix.org"
                  {...commonLinks}
                >
                  Matrix
                </a>
              </li>
              <li>
                <Link href="/special-thanks">
                  <a>Special Thanks</a>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
});

StreamPiFooter.displayName = "StreamPiFooter";
export default StreamPiFooter;
