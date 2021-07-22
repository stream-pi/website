import { FC } from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import type { TeamCardProps } from "./Helper";
import LinkWithPop from "./_LinkWithPop";

const TeamMemberCard: FC<TeamCardProps> = ({
  picture,
  name,
  icons,
  md = "6",
  xs,
}) => {
  return (
    <Col xs={xs} md={md} className="my-4 my-md-2">
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
        <LinkWithPop
          key={idx}
          tooltipId={`${name.replace(/[^A-Z0-9]/gim, "")}-${idx}`}
          description={description}
          icon={{ IcoName, IcoPre }}
          link={link}
        />
      ))}
    </Col>
  );
};

export default TeamMemberCard;
