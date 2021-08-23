import { FC } from "react";
import Row from "react-bootstrap/Row";
import RowCol from "./_RowCol";
import TeamMemberCard from "./_TeamMemberCard";
import type { TeamRowProps } from "./Helper";
import classNames from "classnames";

const TeamMemberRow: FC<TeamRowProps> = ({
  teamMembers,
  className,
  identifier,
  coreTeamRow = false,
}) => {
  const idFormat = identifier.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const cn = classNames("text-center", "justify-content-md-center", className);
  return (
    <div className="mt-4 animate__animated animate__fadeIn animate__slow">
      {/* Team Member Titles */}
      <RowCol>
        <h2 id={idFormat} className="streamPiAbout mt-3">
          {identifier}
        </h2>
      </RowCol>

      <Row
        xs={{ cols: coreTeamRow ? 1 : 2 }}
        md={{ cols: coreTeamRow ? 2 : 4 }}
        className={cn}
      >
        {teamMembers.map(({ name, icons, picture }, idx) => (
          <TeamMemberCard
            key={`${idFormat}${idx}`}
            name={name}
            picture={picture}
            icons={icons}
          />
        ))}
      </Row>
    </div>
  );
};

export default TeamMemberRow;
