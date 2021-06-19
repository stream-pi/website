//* Core
import { FC } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

//* REDUX
import { useAppSelector } from "@store/hooks";
import { getShowNavbar } from "@store/selectors";

const StreamPiNavbar: FC = ({ children }) => {
  //* REDUX
  const showNavbar = useAppSelector(getShowNavbar);
  return showNavbar ? (
    <Navbar
      className="shadow streampi-navbar-class"
      collapseOnSelect
      expand="sm"
      fixed="top"
      variant="dark"
    >
      <Navbar.Brand className="d-sm-none">
        <Image
          src="/favicon.ico"
          className="align-top d-inline-block"
          height="30"
        />
      </Navbar.Brand>
      <div
        style={{ fontSize: "1.25rem" }}
        className="d-sm-none flex-grow-1 text-center spi-brand-text"
      >
        Stream-Pi
      </div>
      <Navbar.Toggle aria-controls="streampi-navbar" />
      <Navbar.Collapse id="streampi-navbar">
        <Nav className="mx-auto">{children}</Nav>
      </Navbar.Collapse>
    </Navbar>
  ) : (
    <></>
  );
};

export default StreamPiNavbar;
