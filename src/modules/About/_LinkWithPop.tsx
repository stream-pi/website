import { FC } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconObj } from "@util/Types";

type LinkProps = {
  description: string;
  link: string;
  icon: IconObj;
  tooltipId: string;
};

const LinkWithPop: FC<LinkProps> = ({
  description,
  link,
  icon: { IcoPre, IcoName },
  tooltipId,
}) => {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id={`tooltip-${tooltipId}`}>{description}</Tooltip>}
    >
      {(props) => (
        <a
          className="px-1 about-icon mx-1 d-inline-block"
          href={link}
          target="_blank"
          rel="noreferrer"
          {...props}
        >
          <FontAwesomeIcon icon={[IcoPre, IcoName]} size="2x" />
        </a>
      )}
    </OverlayTrigger>
  );
};

export default LinkWithPop;
