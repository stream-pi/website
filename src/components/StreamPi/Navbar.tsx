import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const StreamPiNavbar: React.FC<{ navVariant: "light" | "dark" }> = (props) => {
  return (
    <Navbar collapseOnSelect expand="sm" variant={props.navVariant} fixed="top">
      <Navbar.Toggle aria-controls="streampi-navbar" />
      <Navbar.Collapse id="streampi-navbar">
        <Nav className="mx-auto">{props.children}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default StreamPiNavbar;
