//* Core
import { memo, useState } from "react";
import useDarkMode from "use-dark-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useIsClient from "@hooks/useIsClient";

const ThemeSwitch = memo(() => {
  //* Core
  const [hasTransition, setHasTransition] = useState(false);
  const { value, toggle } = useDarkMode(true);
  const isClient = useIsClient();

  /**
   * To prevent the FOUC that a user may see becauase of a transition,
   * adding the transition will happen before the toggle.
   *
   * This flash only seems to happen on hard refresh or cache-less refreshes
   */
  const toggleTheme = () => {
    if (!hasTransition) {
      document.body.classList.add("body-transition");
      setHasTransition(true);
    }
    toggle();
  };

  return (
    <div className="my-auto mx-auto">
      {isClient && (
        <label
          className="toggle-class mb-0 d-flex position-relative align-items-center"
          htmlFor="theme-toggler"
        >
          <input
            className="toggle-check visually-hidden"
            checked={value}
            role="switch"
            onChange={toggleTheme}
            type="checkbox"
            id="theme-toggler"
            title="Darkmode Lightmode Switch"
            aria-label="Darkmode Lightmode Switch"
          />
          <div className="toggle-bg d-block rounded-pill transition" />
          <div className="dot position-absolute rounded-circle transition d-flex align-items-center justify-content-center">
            <FontAwesomeIcon className="theme-sun" icon={["fas", "sun"]} />
            <FontAwesomeIcon className="theme-moon" icon={["fas", "moon"]} />
          </div>
        </label>
      )}
    </div>
  );
});

ThemeSwitch.displayName = "ThemeSwitch";
export default ThemeSwitch;
