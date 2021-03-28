// FIXME: consider renaming

import React, { useState, useEffect } from "react";
import useDarkMode from "use-dark-mode";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeSwitch: React.FC = () => {
  const [icon, setIcon] = useState<boolean>(true);
  const darkMode = useDarkMode(true);

  useEffect(() => {
    setIcon(darkMode.value);
  }, [darkMode.value]);

  return (
    <div className="my-auto mx-auto">
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="theme-tooltip">Toggle Darkmode</Tooltip>}
      >
        <Button
          className="rounded-circle theme-changer"
          variant="transparent"
          size="sm"
          onClick={darkMode.toggle}
          style={{ border: "2px solid" }}
        >
          {icon ? (
            <FontAwesomeIcon className="theme-icon" icon={["fas", "sun"]} />
          ) : (
            <FontAwesomeIcon className="theme-icon" icon={["fas", "moon"]} />
          )}
        </Button>
      </OverlayTrigger>
    </div>
  );
};

export default ThemeSwitch;
