import { FC, Fragment } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import type { HomeCardProps } from "./Helper";

const HomeCard: FC<HomeCardProps> = ({ icons, buttons, title, children }) => {
  const commonProps = {
    className: "mb-5",
    variant: "info",
    style: { marginRight: "0.125rem", marginLeft: "0.125rem" },
  };
  return (
    <Col lg={4} className="d-flex flex-column align-items-center">
      <div className="flex-row">
        {icons.map(({ IcoPre, IcoName }, idx) => (
          <FontAwesomeIcon
            key={`icon${idx}`}
            className="mx-2"
            icon={[IcoPre, IcoName]}
            size="4x"
          />
        ))}
      </div>
      <h3>{title}</h3>
      <p className="text-center flex-grow-1">{children}</p>
      <div>
        {buttons.map(({ link, text, internal }, idx) => (
          <Fragment key={`button${idx}`}>
            {internal ? (
              <Link href={link} passHref>
                <Button {...commonProps}>{text}</Button>
              </Link>
            ) : (
              <Button {...commonProps} href={link} target="_blank">
                {text}
              </Button>
            )}
          </Fragment>
        ))}
      </div>
    </Col>
  );
};

export default HomeCard;
