import { Col } from "react-bootstrap";
import React from "react";

type FooterLink = {
  name: string;
  href: string;
};

type Props = {
  header: string;
  links: FooterLink[];
};

const FooterColumn = ({ header, links }: Props): React.ReactElement => {
  return (
    <Col sm>
      <h5>{header}</h5>
      {links.map((l: FooterLink) => (
        <li style={{ listStyleType: "none" }} key={l.name}>
          <a href={l.href}>{l.name}</a>
        </li>
      ))}
    </Col>
  );
};

export default FooterColumn;
