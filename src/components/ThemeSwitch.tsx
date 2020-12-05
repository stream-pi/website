// FIXME: consider renaming

import React from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  propClick: () => any;
  theme: string;
}

const ThemeSwitch: React.FC<Props> = ({ propClick, theme }) => {
  const light = theme === "light";
  const altTheme = light ? "dark" : "light";
  return (
    <div className="my-auto mx-auto">
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="theme-tooltip">Use {altTheme} theme</Tooltip>}
      >
        <Button
          className={`rounded-circle border-${theme}`}
          variant={altTheme}
          size="sm"
          onClick={propClick}
          style={{ border: "2px solid" }}
        >
          <FontAwesomeIcon
            className="theme-icon"
            icon={light ? ["fas", "moon"] : ["fas", "sun"]}
          />
        </Button>
      </OverlayTrigger>
    </div>
  );
};

export default ThemeSwitch;
