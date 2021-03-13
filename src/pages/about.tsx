import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconObj, TeamMember } from "@util/Types";
import {
  Developers,
  PublicRelations,
  Infrastructure,
  UserExperience,
} from "@helpers/AboutHelper";
import StreamPiSEO from "@StreamPi/SEO";

type Props = {
  description: string;
  link: string;
  icon: IconObj;
};

type TeamRow = {
  teamMembers: TeamMember[];
  className?: string;
  identifier: string;
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

const RowCol: React.FC<{ className?: string }> = ({ children, className }) => {
  return (
    <Row className={`${className} text-center`}>
      <Col>{children}</Col>
    </Row>
  );
};

const TeamMemberCard: React.FC<TeamMember> = ({ picture, name, icons }) => {
  return (
    <Col md="6" className="my-4 my-md-2">
      <h3>{name}</h3>
      <div className="w-100 mx-auto mb-1">
        <Image
          roundedCircle
          src={picture}
          alt={`${name} Pic`}
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

const TeamMemberRow: React.FC<TeamRow> = ({
  teamMembers,
  className,
  identifier,
}) => {
  const idFormat = identifier.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return (
    <div className="mt-4 animate__animated animate__fadeIn animate__slow">
      {/* Team Member Titles */}
      <RowCol>
        <h2 id={idFormat} className="streamPiAbout mt-3">
          {identifier}
        </h2>
      </RowCol>

      {/* Team Member Cards */}
      <Row className={`${className} text-center justify-content-md-center`}>
        {teamMembers.map(({ name, icons, picture }, idx) => (
          <React.Fragment key={`${idFormat}${idx}`}>
            <TeamMemberCard name={name} picture={picture} icons={icons} />
            {"\n"}
          </React.Fragment>
        ))}
      </Row>
    </div>
  );
};

const StreamPiAbout: React.FC = () => {
  return (
    <React.Fragment>
      <StreamPiSEO
        title="About"
        description="Learn about Stream-Pi and the team behind it"
      />
      <RowCol className="animate__animated animate__fadeIn">
        <h2 className="streamPiAbout">What is "Stream-Pi"?</h2>
      </RowCol>
      <RowCol className="mt-4 animate__animated animate__fadeInUp">
        <p>
          Well, as the home page says it was created with the idea to make a
          robust macro keyboard alternative.
        </p>
        <p>
          There are other alternatives, but we found the functionality limiting,
          we wanted to be able to do more!
        </p>
        <p>The Stream-Pi seeks to make the experience as robust as possible;</p>
        <p>
          It actually integrates with software and utilizes API from OBS,
          Twitter, and more to bring an amazing user experience all for FREE.
        </p>
      </RowCol>
      <RowCol className="mt-4 animate__animated animate__fadeInUp">
        <h1 id="theTeam" className="streamPiAbout mt-3">
          Meet the Team!
        </h1>
        <p>
          These are the people behind Stream-Pi, they make sure everything runs
          smoothly.
        </p>
      </RowCol>
      {/* Developers */}
      <TeamMemberRow teamMembers={Developers} identifier="Lead Developers" />

      {/* PR */}
      <TeamMemberRow
        teamMembers={PublicRelations}
        identifier="Public Relations"
      />

      {/* User Experience */}
      <TeamMemberRow
        teamMembers={UserExperience}
        identifier="User Experience"
      />

      {/* INFRASTRUCTURE */}
      <TeamMemberRow teamMembers={Infrastructure} identifier="Infrastructure" />
      {/* How is it made? */}
      <RowCol className="mt-5 animate__animated animate__fadeIn">
        <h2 id="technology" className="streamPiAbout mt-3">
          How is it Made?
        </h2>
      </RowCol>
      <RowCol className="animate__animated animate__fadeIn">
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
