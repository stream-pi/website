import { FC } from "react";
import Col from "react-bootstrap/Col";

type FooterLink = {
  name: string;
  href: string;
};

type FooterColProps = {
  header: string;
  links: FooterLink[];
};

const FooterColumn: FC<FooterColProps> = ({ header, links }) => {
  return (
    <Col className="mb-3">
      <h5>{header}</h5>
      {links.map(({ name, href }) => (
        <li
          style={{ listStyleType: "none" }}
          key={`footer-link-${name.toLowerCase().replace(/[^A-Z0-9]/gim, "-")}`}
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
