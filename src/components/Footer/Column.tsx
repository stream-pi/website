import { FC } from "react";
import Col from "react-bootstrap/Col";
import type { FooterColProps } from "./Helper";

const FooterColumn: FC<FooterColProps> = ({ header, links }) => {
  return (
    <Col xs={6} sm className="mb-3">
      <h5>{header}</h5>
      {links.map(({ name, href }) => (
        <li
          style={{ listStyleType: "none" }}
          key={`footer-link-${name.toLowerCase()}`}
        >
          <a href={href} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </li>
      ))}
    </Col>
  );
};

export default FooterColumn;
