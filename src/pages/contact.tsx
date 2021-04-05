import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ContactForm from "@StreamPi/ContactForm";
import StreamPiSEO from "@StreamPi/SEO";
import SectionWrapper from "@components/SectionWrapper";
import ContributionModal from "@components/Modals/Contribution";

const StreamPiContact: React.FC = () => {
  const [agreed, setAgreed] = useState(false);
  const [disable, setDisable] = useState(true);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(8);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      console.log("Interval");
      setRemainingSeconds((initial) => initial - 1);
    }, 1000);
    const timeoutRef = setTimeout(() => {
      console.log("Timeout");
      clearInterval(intervalRef);
      setDisable(false);
    }, 8000);

    return () => {
      clearInterval(intervalRef);
      clearInterval(timeoutRef);
    };
  }, []);

  return (
    <React.Fragment>
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
                <div className="text-center">
                  <p className="mb-3">
                    Feel free to send us an email, but before you do, just a
                    couple of things...
                  </p>
                  <SectionWrapper>
                    <p className="mb-2">
                      If you want to report a bug, please do not email us.
                      Instead, check our Github repositories to see if the bug
                      you are experiencing has been reported. If it has{" "}
                      <strong>NOT</strong> yet been reported, please open an
                      issue. The below buttons will take you to the repository's
                      issue page.
                    </p>
                    <p className="mb-2">
                      {["Client", "Server", "EssentialActions"].map(
                        (str, idx) => (
                          <React.Fragment key={`repo${idx}`}>
                            <Button
                              variant="info"
                              href={`https://github.com/stream-pi/${str.toLowerCase()}/issues`}
                              target="_blank"
                            >
                              {`${str} Issues`}
                            </Button>
                            {idx < 2 ? " " : ""}
                          </React.Fragment>
                        )
                      )}
                    </p>
                    <p className="mb-0">
                      To be clear; bug reports sent to us via email will{" "}
                      <strong>be ignored</strong>
                    </p>
                  </SectionWrapper>
                  <SectionWrapper>
                    <p className="mb-0">
                      Due to a large increase in spam emails recently,{" "}
                      <strong>
                        any email containing a link will not get sent.
                      </strong>{" "}
                      We are looking for a better way to deter this, but for now
                      this is the best solution.
                    </p>
                  </SectionWrapper>
                  <SectionWrapper>
                    <p className="mb-0">
                      If you are interested in joining the Stream-Pi team,
                      please click <ContributionModal />. A small card will pop
                      up with some special instructions on what to include in
                      your email.
                    </p>
                    <p className="mb-0">
                      You don't have to join the team to contribute, but we are
                      interested in bringing in talented developers. We will
                      also try to answer any general questions about
                      contributing that you may have!
                    </p>
                  </SectionWrapper>
                  <SectionWrapper>
                    <p className="mb-0">
                      Email is a great way to keep things brief and
                      professional, but we do encourage using our{" "}
                      <a
                        href="https://discord.gg/BExqGmk"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Discord
                      </a>{" "}
                      for quicker responses and a more communicative experience.
                    </p>
                  </SectionWrapper>
                  <p className="mb-2">
                    NOTE: The Stream-Pi team will not store, steal, or give away
                    your information for personal use or otherwise.
                  </p>
                  <p className="mb-2">
                    That being said; please{" "}
                    <strong>
                      DO NOT include any personal information in your email.
                    </strong>
                  </p>
                  <p className="mb-3">
                    The button bellow will be available to click after being on
                    this page for 8 seconds. After clicking, the contact form
                    will be available.
                  </p>
                  <Button disabled={disable} onClick={() => setAgreed(true)}>
                    {disable
                      ? `Please wait ${remainingSeconds} seconds`
                      : "I understand"}
                  </Button>
                </div>
              ) : (
                <ContactForm />
              )}
            </>
          </Container>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default StreamPiContact;
