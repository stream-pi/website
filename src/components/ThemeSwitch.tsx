// FIXME: consider renaming

import { useState, useEffect, FC } from "react";
import useDarkMode from "use-dark-mode";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeSwitch: FC = () => {
  const [icon, setIcon] = useState<boolean>(true);
  const [containsTransition, setContainsTransition] = useState(false);
  const { value, toggle } = useDarkMode(true);

  useEffect(() => {
    setIcon(value);
  }, [value]);

  const toggleTheme = () => {
    if (!containsTransition) {
      document.body.classList.add("body-transition");
      setContainsTransition(true);
    }
    toggle();
  };

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
          onClick={toggleTheme}
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
