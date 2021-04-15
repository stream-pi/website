import React from "react";
import Row from "react-bootstrap/Row";
import type { TeamMember } from "@util/Types";
import RowCol from "./RowCol";
import TeamMemberCard from "./TeamMemberCard";

type TeamRow = {
  teamMembers: TeamMember[];
  className?: string;
  identifier: string;
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

export default TeamMemberRow;
