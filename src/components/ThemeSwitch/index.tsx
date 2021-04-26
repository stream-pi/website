//* FIXME: consider renaming

import { useState, FC, useEffect } from "react";
import useDarkMode from "use-dark-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeSwitch: FC = () => {
  const [containsTransition, setContainsTransition] = useState(false);
  //* For some reason, without this state the onChange event wont fire
  const [checked, setChecked] = useState(true);
  //* this helps with the switcher swinging if the default is light
  const [mounted, setMounted] = useState(false);
  const { value, toggle } = useDarkMode(true);

  useEffect(() => {
    setChecked(value);
    setMounted(true);
  }, [value]);

  const toggleTheme = () => {
    if (!containsTransition) {
      document.body.classList.add("body-transition");
      setContainsTransition(true);
    }
    toggle();
    setChecked(!checked);
    console.log("object");
  };

  return (
    <div className="my-auto mx-auto">
      {mounted && (
        <label
          className="toggle-class mb-0 d-flex position-relative align-items-center"
          htmlFor="toggler"
        >
          <input
            className="toggle-check sr-only"
            checked={checked}
            onChange={toggleTheme}
            type="checkbox"
            id="toggler"
          />
          <div className="toggle-bg d-block rounded-pill transition border border-light" />
          <div className="dot position-absolute rounded-circle transition" />
          <FontAwesomeIcon className="theme-icon sun" icon={["fas", "sun"]} />
          <FontAwesomeIcon className="theme-icon moon" icon={["fas", "moon"]} />
        </label>
      )}
    </div>
  );
};

export default ThemeSwitch;
