//TODO: consider making if statement on line 11 ternary

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scroll = (e: React.MouseEvent<HTMLElement>) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    e.currentTarget.blur();
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Fade in={isVisible} unmountOnExit mountOnEnter>
      <div id="scroll-to-top">
        <Button
          onClick={scroll}
          variant="primary"
          className="rounded-circle shadow"
          size="lg"
        >
          <FontAwesomeIcon icon={["fas", "angle-up"]} size="2x" />
        </Button>
      </div>
    </Fade>
  );
};

export default ScrollToTop;
