import { FC } from "react";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { MetaData } from "@util/Config";
import StreamPiSEO from "@components/StreamPiSEO";
import { HomeCard, HomeInfo, StreamPiVideo } from "@modules/Home";

const StreamPiHome: FC = () => {
  const { CP, FOS, HM } = HomeInfo;
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
          <h2 className="text-center">
            <em>A robust Macro keyboard software</em>
          </h2>
        </Col>
      </Row>
      {/* Info type stuff */}
      <Row className="pt-4 animate__animated animate__fadeInLeft">
        <HomeCard
          {...FOS("Check out the Source code")}
          title="Free and Open Source"
        >
          Stream-Pi is completely free and <strong>open-source</strong>. It is
          licensed according to the GNU GPL v3 Open-Source License. This
          guarantees the fact that we strictly do not collect ANY data or
          information and respect your privacy.
        </HomeCard>
        <HomeCard {...CP("Download The Latest")} title="Cross Platform">
          Stream-Pi runs on multiple platforms; Windows, MacOS, Android, iOS and
          Linux. This also includes ARM Systems like Raspberry Pi. No matter
          which platform you use, you'll still have the same great experience!
        </HomeCard>
        <HomeCard
          {...HM("How it's made", "How it works")}
          title="Highly Modular" //* Maybe "Developer Friendly"?
        >
          Stream-Pi supports offers a rich API, that developers can use to make
          their own custom Actions. Not only that, Stream-Pi has a rich theme
          system where users can develop their own themes with JavaFX CSS.
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
            <span className="pe-2">
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
