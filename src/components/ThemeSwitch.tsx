//* Core
import { useEffect, memo } from "react";
import useDarkMode from "use-dark-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useIsClient from "@hooks/useIsClient";

//* REDUX
import { useAppDispatch } from "@store/hooks";
import { clientActions } from "@store/Client/slice";

const ThemeSwitch = () => {
  //* Core
  const { value, toggle } = useDarkMode(true);
  const isClient = useIsClient();

  //* REDUX
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clientActions.setColorThemeBoolean(value));
  }, [value, dispatch]);

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
            onChange={toggle}
            type="checkbox"
            id="theme-toggler"
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
};

export default memo(ThemeSwitch);
