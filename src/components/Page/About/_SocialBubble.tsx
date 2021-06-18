import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { SocialBubbleProps } from "./Helper";

const SocialBubble: FC<SocialBubbleProps> = ({
  text,
  IcoPre,
  IcoName,
  className = "bg-primary",
  iconClassName = "text-light",
  textClassName = "text-light",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`d-inline-flex align-items-center bubble-wrapper py-1 px-2 rounded-pill ${className}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <FontAwesomeIcon
        className={iconClassName}
        icon={[IcoPre, IcoName]}
        size="2x"
      />
      <Collapse in={open} dimension="width">
        <div className="social-bubble pl-2">
          <p className={`mb-0 ${textClassName}`}>{text}</p>
        </div>
      </Collapse>
    </div>
  );
};

export default SocialBubble;
