import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

const StreamPiNavbar: React.FC<{ navVariant: "light" | "dark" }> = ({
  navVariant,
  children,
}) => {
  return (
    <Navbar collapseOnSelect expand="sm" variant={navVariant} fixed="top">
      <Navbar.Brand className="d-sm-none">
        <Image src="/favicon.ico" height="32px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="streampi-navbar" />
      <Navbar.Collapse id="streampi-navbar">
        <Nav className="mx-auto">{children}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default StreamPiNavbar;
