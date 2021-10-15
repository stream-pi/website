//* Core
import { FC } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Container from "react-bootstrap/Container";

const StreamPiNavbar: FC = ({ children }) => {
  return (
    <Navbar
      id="streampi-navbar"
      as="header"
      className="shadow"
      collapseOnSelect
      expand="sm"
      fixed="top"
      variant="dark"
    >
      <Container as="nav" aria-label="Main navigation" fluid>
        <Navbar.Brand className="d-flex d-sm-none">
          <Image
            src="/favicon.ico"
            className="align-top d-inline-block"
            height="30"
            width="30"
            alt="Stream-Pi Logo"
          />
        </Navbar.Brand>
        <div
          style={{ fontSize: "1.25rem" }}
          className="d-sm-none flex-grow-1 text-center spi-brand-text"
        >
          Stream-Pi
        </div>
        <Navbar.Toggle aria-controls="streampi-navbar-nav" />
        <Navbar.Collapse id="streampi-navbar-nav">
          <Nav className="mx-auto">{children}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default StreamPiNavbar;
