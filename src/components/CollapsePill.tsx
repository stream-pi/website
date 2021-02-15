import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionWrapper from "@components/SectionWrapper";

interface Props {
  id: string;
  children?: React.ReactNode;
  titleText: string;
}

const CollapsePill: React.FC<Props> = ({ id, children, titleText }) => {
  const [open, setOpen] = useState(false);

  return (
    <SectionWrapper>
      <p
        onClick={() => setOpen(!open)}
        className="text-center mb-1 my-collapse-select"
        aria-controls={id}
        aria-expanded={open}
      >
        {titleText}
        <FontAwesomeIcon
          className="ml-3"
          icon={["fas", open ? "angle-up" : "angle-down"]}
          size="lg"
        />
      </p>
      <Collapse in={open}>
        <div id={id}>
          <br />
          {children}
        </div>
      </Collapse>
    </SectionWrapper>
  );
};

export default CollapsePill;
