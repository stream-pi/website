//* Core
import { FC, useEffect } from "react";
import useDarkMode from "use-dark-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRenderOnMount } from "@util/Hooks";

//* REDUX
import { useAppDispatch } from "@store/hooks";
import { clientActions } from "@store/Client/slice";

const ThemeSwitch: FC = () => {
  //* Core
  const { value, toggle } = useDarkMode(true);
  const mounted = useRenderOnMount();

  //* REDUX
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clientActions.setColorThemeBoolean(value));
  }, [value, dispatch]);

  return (
    <div className="my-auto mx-auto">
      {mounted && (
        <label
          className="toggle-class mb-0 d-flex position-relative align-items-center"
          htmlFor="toggler"
        >
          <input
            className="toggle-check sr-only"
            checked={value}
            onChange={toggle}
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
