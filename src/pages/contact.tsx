import { useState } from "react";
import { PageView } from "@util/Types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@components/Button";
import { ContactForm, PreFormInfo } from "@modules/Contact";
import { useCountDown } from "@hooks/useCountDown";
import PageLayout from "@modules/Layout/Page";

const StreamPiContact: PageView = () => {
  const [agreed, setAgreed] = useState(false);
  const { counting, remainingSeconds } = useCountDown(8000);

  return (
    <PageLayout
      title="Contact"
      description="Get into contact with the Stream-Pi team! Ask us a question, give us some feedback, we'd love to hear from you!"
    >
      <Row className="pt-2 animate__animated animate__fadeIn">
        <Col className="text-center">
          <h1>Reach out to us</h1>
          <p className="mb-2">
            Interested in a press kit? Want to suggest a feature? Do you have
            some general feedback for us? Maybe you'd like to contribute or
            maybe it's something else?
          </p>
        </Col>
      </Row>
      <div className="py-2">
        <Container className="animate__animated animate__fadeIn">
          {!agreed ? (
            <PreFormInfo>
              <Button disabled={counting} onClick={() => setAgreed(true)}>
                {counting
                  ? `Please wait ${remainingSeconds} seconds`
                  : "I understand"}
              </Button>
            </PreFormInfo>
          ) : (
            <ContactForm />
          )}
        </Container>
      </div>
    </PageLayout>
  );
};

export default StreamPiContact;
