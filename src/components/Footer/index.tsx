import { FC } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import LegalInfoModal from "@components/Modals/TermsOfUse";

const StreamPiFooter: FC = ({ children }) => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <main className="flex-fill" />
      <footer className="footer pt-4 pb-2 mt-2">
        <Container>
          <Row>
            <Col className="mb-3 mb-lg-0" lg="6">
              <p className="mb-1">
                &copy; 2019 - {currentYear}, Stream-Pi Group and its Affiliates
              </p>
              <p className="mb-1">
                <LegalInfoModal />
              </p>
              <p className="mb-0">
                Website Version{" "}
                <strong>{process.env.NEXT_PUBLIC_WEB_VERSION}</strong>
              </p>
            </Col>
            {children}
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default StreamPiFooter;
