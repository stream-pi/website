import { PageView } from "@util/Types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { printOutDate } from "@util";
import PageLayout from "@modules/Layout/Page";

const Troubleshooting: PageView = () => {
  const dateOfLastUpdate = "2021-06-07 11:25:50";
  return (
    <PageLayout
      title="Troubleshoot"
      description="This page outlines common problems and troubleshooting steps for your Stream-Pi"
      underConstruction
      pageSource="/troubleshooting.tsx"
    >
      <Row className="text-center animate__animated animate__fadeIn">
        <Col>
          <h1>Troubleshooting Stream-Pi</h1>
        </Col>
      </Row>
      <Row className="mt-3 animate__animated animate__fadeInUp text-center">
        <Col>
          <p>
            If you are having some trouble, see if your issue is listed here
            among some of our more common ones!
          </p>
          <p>
            Below are solutions to these common issues / problems and some
            general troubleshooting steps.
          </p>
          <p>
            This page will be kept up to date with new information as it becomes
            available!
          </p>
        </Col>
      </Row>
      <Row className="animate__animated animate__fadeInLeft text-center mt-2">
        <Col>
          <h4>
            <em>
              Date of Last Update{" "}
              <strong>{printOutDate(dateOfLastUpdate)}</strong>
            </em>
          </h4>
        </Col>
      </Row>
      <Row className="animate__animated animate__fadeIn animate__slow mt-4 text-center">
        <Col>
          <h2>Coming soon!</h2>
        </Col>
      </Row>
    </PageLayout>
  );
};

export default Troubleshooting;
