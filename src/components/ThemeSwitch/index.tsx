//* FIXME: consider renaming

import { useState, FC, useEffect } from "react";
import useDarkMode from "use-dark-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRenderOnMount } from "@util";

const ThemeSwitch: FC = () => {
  //* used to add a transition helper class to the doc-body
  const [containsTransition, setContainsTransition] = useState(false);
  //* For some reason, without this state the onChange event wont fire
  const [checked, setChecked] = useState(true);
  const { value, toggle } = useDarkMode(true);
  const mounted = useRenderOnMount();

  //? should this be a useMemo or useLayoutEffect instead?
  useEffect(() => {
    setChecked(value);
  }, [value]);

  const toggleTheme = () => {
    if (!containsTransition) {
      document.body.classList.add("body-transition");
      setContainsTransition(true);
    }
    toggle();
    //? This set state seems unneeded as the above useEffect hook handles the change
    // setChecked(!checked);
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
          <div className="toggle-bg d-block rounded-pill transition" />
          <div className="dot position-absolute rounded-circle transition" />
          <FontAwesomeIcon className="theme-icon sun" icon={["fas", "sun"]} />
          <FontAwesomeIcon className="theme-icon moon" icon={["fas", "moon"]} />
        </label>
      )}
    </div>
  );
};

export default ThemeSwitch;
