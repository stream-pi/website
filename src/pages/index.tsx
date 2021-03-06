import React from "react";
import Image from "react-bootstrap/Image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IconObj, ButtonObj } from "@util/Types";
import { HomeInfo } from "@helpers/HomeHelper";
import config from "@helpers/SEOHelper";
import StreamPiVideo from "@StreamPi/Video";
import StreamPiSEO from "@StreamPi/SEO";
import ThemedButton from "@components/ThemedButton";

type Props = {
  icons: IconObj[];
  buttons: ButtonObj[];
  title: string;
  extraClass?: string[];
};

const HomeCard: React.FC<Props> = ({
  icons,
  buttons,
  title,
  children,
  extraClass,
}) => {
  const commonProps = { className: "mb-5", variant: "info" };
  return (
    <Col lg={4} className="text-center">
      {icons.map(({ IcoPre, IcoName }, idx) => (
        <React.Fragment key={`icon${idx}`}>
          <FontAwesomeIcon
            className={extraClass ? extraClass[idx] : ""}
            icon={[IcoPre, IcoName]}
            size="4x"
          />
          {"\n"}
        </React.Fragment>
      ))}
      <h3>{title}</h3>
      <p>{children}</p>
      <p>
        {buttons.map(({ link, text, internal }, idx) => (
          <React.Fragment key={`button${idx}`}>
            {internal ? (
              <Link href={link} as={link} passHref>
                <ThemedButton {...commonProps}>{text}</ThemedButton>
              </Link>
            ) : (
              <ThemedButton {...commonProps} href={link} target="_blank">
                {text}
              </ThemedButton>
            )}
            {"\n"}
          </React.Fragment>
        ))}
      </p>
    </Col>
  );
};

const StreamPiHome: React.FC = () => {
  const { KIT, ICF, MIJ } = HomeInfo;
  return (
    <React.Fragment>
      <StreamPiSEO title="Home" description={config.description} flipOrder />
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
      <Row className="animate__animated animate__fadeInUp">
        <Col>
          <p className="text-center">A robust Macro keyboard alternative</p>
          <p className="text-center mb-0">Built for Raspberry Pi</p>
          <p className="text-center mb-0">
            Runs on Windows, Mac, Linux, and Android
          </p>
        </Col>
      </Row>
      {/* Info type stuff */}
      <Row className="pt-4 animate__animated animate__fadeInUp">
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
          <strong>open source.</strong>
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
      <Row className="pt-5 pb-2 animate__animated animate__fadeInUp">
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
          <ThemedButton
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
          </ThemedButton>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default StreamPiHome;
