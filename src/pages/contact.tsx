import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ThemedButton from "@components/ThemedButton";
import ContactForm from "@StreamPi/ContactForm";
import ContributionModal from "@components/ContributionModal";

const ContactDisclaimer: React.FC = (props) => {
  return (
    <>
      <hr className="capsule top-hr mb-0" />
      {props.children}
      <hr className="capsule bottom-hr mt-0" />
    </>
  );
};

const StreamPiContact: React.FC = () => {
  const [agreed, setAgreed] = useState(false);
  const [disable, setDisable] = useState(true);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(7);

  const intervalRef = useRef<any>(null);
  const timeoutRef = useRef<any>(null);
  const currentCount = useRef<number>(7);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // console.log("Interval");
      setRemainingSeconds(currentCount.current - 1);
      currentCount.current -= 1;
    }, 1000);
    timeoutRef.current = setTimeout(() => {
      // console.log("Timeout");
      clearInterval(intervalRef.current);
      setDisable(false);
    }, 7000);

    return () => {
      clearInterval(intervalRef.current);
      clearInterval(timeoutRef.current);
    };
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Contact StreamPi</title>
        <meta property="og:title" content="Contact StreamPi" />
        <meta property="og:url" content="https://stream-pi.com/contact" />
      </Head>
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
                    Feel free to send us an email, but before you do, just a couple of things...
                  </p>
                  <ContactDisclaimer>
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
                            <ThemedButton
                              // isLightMode={global.isLightMode}
                              newVariant="info"
                              // size="sm"
                              href={`https://github.com/Stream-Pi/${str}/issues`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {`${str} Issues`}
                            </ThemedButton>
                            {idx < 2 ? " " : ""}
                          </React.Fragment>
                        )
                      )}
                    </p>
                    <p className="mb-2">
                      To be clear; bug reports sent to us via email will{" "}
                      <strong>be ignored</strong>
                    </p>
                  </ContactDisclaimer>
                  <ContactDisclaimer>
                    <p className="mb-2">
                      Due to a large increase in spam emails recently,{" "}
                      <strong>
                        any email containing a link will not get sent.
                      </strong>{" "}
                      We are looking for a better way to deter this, but for now
                      this is the best solution.
                    </p>
                  </ContactDisclaimer>
                  <ContactDisclaimer>
                    <p className="mb-2">
                      If you are interested in contributing, please click{" "}
                      <ContributionModal />. A small card will pop up with some
                      special instructions on what to include in your email.
                    </p>
                  </ContactDisclaimer>
                  <ContactDisclaimer>
                    <p className="mb-2">
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
                  </ContactDisclaimer>
                  <p className="mb-2">
                    NOTE: Stream-pi.com or any of the team behind it will not
                    store, steal, or give away your information for personal use
                    or otherwise.
                  </p>
                  <p className="mb-3">
                    The button bellow will be available to click after being on
                    this page for 7 seconds. After clicking, the contact form
                    will be available.
                  </p>
                  <ThemedButton
                    // isLightMode={global.isLightMode}
                    disabled={disable}
                    onClick={() => setAgreed(true)}
                  >
                    {disable
                      ? `Please wait ${remainingSeconds} seconds`
                      : "I understand"}
                  </ThemedButton>
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
