import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LegalInfoModal from "@components/Modals/TermsOfUse";

type Props = {
  footerColumns: React.ReactElement;
};

const StreamPiFooter = ({ footerColumns }: Props): React.ReactElement => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="card-footer pt-4 pb-4">
        <Container>
          <Row>
            <Col className="ml-5" lg="6">
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
            {footerColumns}
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default StreamPiFooter;
