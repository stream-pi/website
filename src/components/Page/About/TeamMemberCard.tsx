import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import type { TeamMember } from "@util/Types";
import LinkWithPop from "./LinkWithPop";

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

export default TeamMemberCard;
