//TODO: consider making if statement on line 17 ternary

import { useEffect, useState, MouseEvent, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@components/Button";
import Fade from "react-bootstrap/Fade";

/**
 * A Button element that appears when the vertical offest exceeds 300px.
 *
 * Currently throws strict mode error
 *
 * @returns DOM element that when clicked, will smoothly scroll back to the top of the page.
 */
const ScrollToTop = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scroll = (e: MouseEvent<HTMLElement>) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    e.currentTarget.blur();
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Fade in={isVisible} unmountOnExit mountOnEnter>
      <div
        className="position-fixed is-fixed"
        style={{ bottom: "1rem", right: "1rem" }}
      >
        <Button
          onClick={scroll}
          variant="primary"
          className="rounded-circle shadow d-flex"
        >
          <FontAwesomeIcon icon={["fas", "angle-up"]} size="2x" />
        </Button>
      </div>
    </Fade>
  );
});

ScrollToTop.displayName = "ScrollToTop";
export default ScrollToTop;
