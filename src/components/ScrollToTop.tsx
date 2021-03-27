//TODO: consider making if statement on line 11 ternary

import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    btnRef.current?.blur();
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Fade in={isVisible} unmountOnExit>
      <div id="scroll-to-top">
        <Button
          ref={btnRef}
          onClick={scroll}
          variant="primary"
          className="rounded-circle shadow-sm"
          size="lg"
        >
          <FontAwesomeIcon icon={["fas", "angle-up"]} size="2x" />
        </Button>
      </div>
    </Fade>
  );
};

export default ScrollToTop;
