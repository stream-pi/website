import React from "react";
import Image from "next/image";
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

const HomeCard: React.FC<Props> = (props) => {
  const { icons, buttons, title, children, extraClass } = props;

  const commonProps = { className: "mb-5", variant: "info" };

  return (
    <Col lg={4} className="text-center">
      {icons.map((i, idx) => (
        <React.Fragment key={`icon${idx}`}>
          <FontAwesomeIcon
            className={extraClass ? extraClass[idx] : ""}
            icon={[i.type, i.name]}
            size="4x"
          />
          {"\n"}
        </React.Fragment>
      ))}
      <h3>{title}</h3>
      <p>{children}</p>
      <p>
        {buttons.map((b, idx) => (
          <React.Fragment key={`button${idx}`}>
            {b.internal ? (
              <Link href={b.link} as={b.link} passHref>
                {/* <a
                  className={`mb-5 btn btn-${
                    global.isLightMode ? "outline-info" : "info"
                  }`}
                >
                  {b.text}
                </a> */}
                <ThemedButton {...commonProps}>{b.text}</ThemedButton>
              </Link>
            ) : (
              <ThemedButton {...commonProps} href={b.link} target="_blank">
                {b.text}
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
          <Image
            height="200px"
            width="188px"
            id="logo"
            src="/images/logo.png"
            alt="Logo"
          />
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
        <HomeCard
          buttons={KIT.buttons}
          icons={KIT.icons}
          title="Keep in touch with us!"
          extraClass={KIT.extraClass}
        >
          We have a discord where we talk about all things code! We've also got
          a twitter where we share updates and community submissions. These are
          the best places to keep up to date about what's going on development
          wise with the Stream-Pi
        </HomeCard>
        <HomeCard
          buttons={ICF.buttons}
          icons={ICF.icons}
          title="It's Completely Free!"
        >
          We will never put the Stream-Pi behind a pay wall, we wanted to create
          an alternative that wouldn't break the bank and as such it is and
          always will be free to download. It's also{" "}
          <strong>open source.</strong>
        </HomeCard>
        <HomeCard
          buttons={MIJ.buttons}
          icons={MIJ.icons}
          title="Made in JavaFX"
        >
          Both of us wanted to make something in JavaFX because it seemed to
          have been forgotten by the community and given that it's a great way
          to build UI and a challenge to build for on the Raspberry Pi, we
          decided to use it to learn more and build a great product! Thanks to
          Bellsoft for keeping JavaFX alive!
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
            // isLightMode={global.isLightMode}
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
