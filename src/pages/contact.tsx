import { FC, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import StreamPiSEO from "@components/StreamPiSEO";
import { ContactForm, PreFormInfo } from "@components/Page/Contact";
import { useCountDown } from "@util";

const StreamPiContact: FC = () => {
  const [agreed, setAgreed] = useState(false);
  const { counting, remainingSeconds } = useCountDown(8000);

  return (
    <>
      <StreamPiSEO
        title="Contact"
        description="Get into contact with the Stream-Pi team!  Ask us a question, give us some feedback, we'd love to hear from you!"
      />
      <Row className="pt-2 animate__animated animate__fadeIn">
        <Col className="text-center">
          <h3>Reach out to us</h3>
          <p className="mb-2">
            Interested in a press kit? Want to suggest a feature? Do you have
            some general feedback for us? Maybe you'd like to contribute or
            maybe it's something else?
          </p>
        </Col>
      </Row>
      <Row className="py-2">
        <Col>
          <Container className="animate__animated animate__fadeIn">
            <>
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
            </>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default StreamPiContact;
