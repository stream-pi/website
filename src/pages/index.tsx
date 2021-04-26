import { FC } from "react";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { MetaData } from "@util/Config";
import StreamPiSEO from "@components/StreamPiSEO";
import { HomeCard, HomeInfo, StreamPiVideo } from "@components/Page/Home";

const StreamPiHome: FC = () => {
  const { KIT, ICF, MIJ } = HomeInfo;
  return (
    <>
      <StreamPiSEO title="Home" description={MetaData.description} flipOrder />
      {/* title */}
      <Row>
        <Col className="text-center animate__animated animate__fadeIn">
          <h1 id="streamPiHome">Stream-Pi</h1>
        </Col>
      </Row>
      <Row className="animate__animated animate__fadeIn animate__slower">
        <Col className="text-center">
          <Image height="200px" id="logo" src="/images/logo.png" alt="Logo" />
        </Col>
      </Row>
      {/* Description */}
      <Row className="animate__animated animate__fadeIn">
        <Col>
          <p className="text-center">A robust Macro keyboard alternative</p>
          <p className="text-center mb-0">Built for Raspberry Pi</p>
          <p className="text-center mb-0">
            Runs on Windows, Mac, Linux, and Android
          </p>
        </Col>
      </Row>
      {/* Info type stuff */}
      <Row className="pt-4 animate__animated animate__fadeInLeft">
        <HomeCard {...KIT} title="Keep in touch with us!">
          We have a discord where we talk about all things code! We've also got
          a twitter where we share updates and community submissions. These are
          the best places to keep up to date about what's going on development
          wise with the Stream-Pi
        </HomeCard>
        <HomeCard {...ICF} title="It's Completely Free!">
          We will never put the Stream-Pi behind a pay wall, we wanted to create
          an alternative that wouldn't break the bank and as such it is and
          always will be free to download. It's also{" "}
          <strong>open source</strong> and <strong>very modular</strong>.
        </HomeCard>
        <HomeCard {...MIJ} title="Made in JavaFX">
          We wanted to make something in JavaFX because it seemed to have been
          forgotten by the community and given that it's a great way to build UI
          and a challenge to build for on the Raspberry Pi.
        </HomeCard>
      </Row>
      {/* video */}
      <StreamPiVideo />
      {/* donation */}
      <Row className="pt-5 pb-2 animate__animated animate__fadeIn">
        <Col className="text-center">
          <h3>Like the Stream-Pi? Consider donating to help!</h3>
          <p>
            Donating will never be necessary and the Stream-Pi will always be
            free. But web hosting is not, and we can't quit our day jobs.
          </p>
          <p>
            Donations will help us be able to continue hosting without worry,
            and help us focus extra time on development
          </p>
          <Button
            variant="danger"
            href="https://www.patreon.com/streampi"
            target="_blank"
            style={{ borderRadius: "25px" }}
            className="px-4"
          >
            <span className="pr-2">
              <FontAwesomeIcon icon={["fab", "patreon"]} />
            </span>{" "}
            Visit Our Patreon
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default StreamPiHome;
