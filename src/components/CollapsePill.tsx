import { useState, FC } from "react";
import Collapse from "react-bootstrap/Collapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionWrapper from "@components/SectionWrapper";

type Props = {
  id: string;
  titleText: string;
};

const CollapsePill: FC<Props> = ({ id, children, titleText }) => {
  const [open, setOpen] = useState(false);

  return (
    <SectionWrapper>
      <button
        onClick={() => setOpen(!open)}
        className="btn w-100 text-center mb-1 my-collapse-select"
        aria-controls={id}
        aria-expanded={open}
      >
        {titleText}
        <FontAwesomeIcon
          className="ml-3"
          icon={["fas", open ? "angle-up" : "angle-down"]}
          size="lg"
        />
      </button>
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
