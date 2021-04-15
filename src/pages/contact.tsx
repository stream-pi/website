import { FC, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import StreamPiSEO from "@components/StreamPiSEO";
import { ContactForm, PreFormInfo } from "@components/Page/Contact";

const StreamPiContact: FC = () => {
  const [agreed, setAgreed] = useState(false);
  const [disable, setDisable] = useState(true);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(8);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      // console.log("Interval");
      setRemainingSeconds((initial) => initial - 1);
    }, 1000);
    const timeoutRef = setTimeout(() => {
      // console.log("Timeout");
      clearInterval(intervalRef);
      setDisable(false);
    }, 8000);

    return () => {
      clearInterval(intervalRef);
      clearInterval(timeoutRef);
    };
  }, []);

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
                  <Button disabled={disable} onClick={() => setAgreed(true)}>
                    {disable
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
