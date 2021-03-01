import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconObj, TeamMember } from "@util/Types";
import { Developers, UX_PR, Infrastructure } from "@helpers/AboutHelper";
import StreamPiSEO from "@StreamPi/SEO";

type Props = {
  description: string;
  link: string;
  icon: IconObj;
};

const LinkWithPop: React.FC<Props> = ({
  description,
  link,
  icon: { IcoPre, IcoName },
}) => {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="tooltip-test">{description}</Tooltip>}
    >
      <a
        className="px-1 about-icon"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={[IcoPre, IcoName]} size="2x" />
      </a>
    </OverlayTrigger>
  );
};

const RowCol: React.FC<{ className: string }> = ({ children, className }) => {
  return (
    <Row className={className}>
      <Col>{children}</Col>
    </Row>
  );
};

const TeamMemberCard: React.FC<TeamMember> = ({ picture, name, icons }) => {
  return (
    <Col md="6" className="my-4 my-md-0">
      <h3>{name}</h3>
      <div className="w-100 mx-auto mb-1">
        <Image
          roundedCircle
          src={picture}
          alt="developer pic"
          className="w-50"
        />
      </div>
      {icons.map(({ IcoName, IcoPre, description, link }, idx) => (
        <React.Fragment key={idx}>
          <LinkWithPop
            description={description}
            icon={{ IcoName, IcoPre }}
            link={link}
          />
          {"\n"} {/* why is this here? */}
        </React.Fragment>
      ))}
    </Col>
  );
};

const StreamPiAbout: React.FC = () => {
  return (
    <React.Fragment>
      <StreamPiSEO
        title="About"
        description="Learn about Stream-Pi and the team behind it"
      />
      <RowCol className="text-center animate__animated animate__fadeIn">
        <h2 className="streamPiAbout">What is "StreamPi"?</h2>
      </RowCol>
      <RowCol className="text-center mt-4 animate__animated animate__fadeInUp">
        <p>
          Well, as the home page says it was created with the idea to make a
          robust macro keyboard alternative.
        </p>
        <p>
          There are other alternatives, but we found the functionality limiting,
          we wanted to be able to do more!
        </p>
        <p>The StreamPi seeks to make the experience as robust as possible;</p>
        <p>
          It actually integrates with software and utilizes API from OBS,
          Twitter, and more to bring an amazing user experience all for FREE.
        </p>
      </RowCol>
      <RowCol className="text-center mt-4 animate__animated animate__fadeInUp">
        <h1 id="theTeam" className="streamPiAbout">
          Meet the Team!
        </h1>
        <p>
          These are the people behind Stream-Pi, they make sure everything runs
          smoothly.
        </p>
      </RowCol>
      <RowCol className="text-center mt-4 animate__animated animate__fadeInUp">
        <h2 id="developers" className="streamPiAbout">
          Lead Developers
        </h2>
      </RowCol>
      {/* DEVELOPERS */}
      <Row className="text-center animate__animated animate__fadeInUp">
        {Developers.map((dev, idx) => (
          <React.Fragment key={`developer${idx}`}>
            <TeamMemberCard
              name={dev.name}
              picture={dev.picture}
              icons={dev.icons}
            />
            {"\n"}
          </React.Fragment>
        ))}
      </Row>
      {/* UX / PR */}
      <RowCol className="text-center mt-5 animate__animated animate__fadeInUp">
        <h2 id="uxpr" className="streamPiAbout">
          UX / PR
        </h2>
        <p>User experience / Public relations</p>
      </RowCol>
      <Row className="text-center mb-2 animate__animated animate__fadeInUp">
        {UX_PR.map((mem, idx) => (
          <React.Fragment key={`uxpr${idx}`}>
            <TeamMemberCard
              name={mem.name}
              picture={mem.picture}
              icons={mem.icons}
            />
            {"\n"}
          </React.Fragment>
        ))}
      </Row>
      {/* INFRASTRUCTURE */}
      <RowCol className="text-center mt-5 animate__animated animate__fadeInUp">
        <h2 id="infrastructure" className="streamPiAbout">
          Infrastructure
        </h2>
      </RowCol>
      <Row className="text-center mb-2 animate__animated animate__fadeInUp">
        {Infrastructure.map((mem, idx) => (
          <React.Fragment key={`infra${idx}`}>
            <TeamMemberCard
              name={mem.name}
              picture={mem.picture}
              icons={mem.icons}
            />
            {"\n"}
          </React.Fragment>
        ))}
      </Row>
      {/* How is it made? */}
      <RowCol className="text-center mt-5 animate__animated animate__fadeInUp">
        <h2 id="technology" className="streamPiAbout">
          How is it Made?
        </h2>
      </RowCol>
      <RowCol className="text-center animate__animated animate__fadeInUp">
        <p>
          Well, as it says on the homepage, Stream-Pi is made using the Java
          language and the JavaFX library. We use the Graal VM Community Edition
          as our JDK.
        </p>
        <p>
          We use a modular system to be able to break the project up into parts.
          The software is not just one Java "project" but several smaller
          projects that make up a whole.
        </p>
        <p>
          Originally we were only going to do this for our plugin system, but it
          was such a useful design patern that it was extened into a utility
          module and a theme API.
        </p>
        <p>
          In order to implement all of our Stream-Pi modules into the base
          Client and Server projects, we implemented maven. This additionally
          allows us to streamline a build system that is not platform
          restrictive.
        </p>
        <p>
          In order to compile the software into native platform images, we use
          the Gluon Client. Native images run directly on the platform like
          actual native apps, rather than running on a Java Virtual Machine,
          reducing footprint and resources needed.
        </p>
      </RowCol>
    </React.Fragment>
  );
};

export default StreamPiAbout;
