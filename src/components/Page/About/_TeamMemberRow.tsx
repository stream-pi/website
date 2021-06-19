import { FC } from "react";
import Row from "react-bootstrap/Row";
import RowCol from "./_RowCol";
import TeamMemberCard from "./_TeamMemberCard";
import { TeamRow } from "./Helper";

const TeamMemberRow: FC<TeamRow> = ({
  teamMembers,
  className = "placeholder",
  identifier,
  coreTeamRow = false,
}) => {
  const idFormat = identifier.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return (
    <div className="mt-4 animate__animated animate__fadeIn animate__slow">
      {/* Team Member Titles */}
      <RowCol className="placeholder">
        <h2 id={idFormat} className="streamPiAbout mt-3">
          {identifier}
        </h2>
      </RowCol>

      <Row className={`${className} text-center justify-content-md-center`}>
        {teamMembers.map(({ name, icons, picture }, idx) => (
          <TeamMemberCard
            md={coreTeamRow ? "6" : "3"}
            xs={!coreTeamRow && "6"}
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
