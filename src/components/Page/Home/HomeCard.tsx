import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { IconObj, ButtonObj } from "@util/Types";

type HomeCardProps = {
  icons: IconObj[];
  buttons: ButtonObj[];
  title: string;
  extraClass?: string[];
};

const HomeCard: React.FC<HomeCardProps> = ({
  icons,
  buttons,
  title,
  children,
  extraClass,
}) => {
  const commonProps = { className: "mb-5", variant: "info" };
  return (
    <Col lg={4} className="text-center">
      {icons.map(({ IcoPre, IcoName }, idx) => (
        <React.Fragment key={`icon${idx}`}>
          <FontAwesomeIcon
            className={extraClass ? extraClass[idx] : ""}
            icon={[IcoPre, IcoName]}
            size="4x"
          />
          {"\n"}
        </React.Fragment>
      ))}
      <h3>{title}</h3>
      <p>{children}</p>
      <p>
        {buttons.map(({ link, text, internal }, idx) => (
          <React.Fragment key={`button${idx}`}>
            {internal ? (
              <Link href={link} as={link} passHref>
                <Button {...commonProps}>{text}</Button>
              </Link>
            ) : (
              <Button {...commonProps} href={link} target="_blank">
                {text}
              </Button>
            )}
            {"\n"}
          </React.Fragment>
        ))}
      </p>
    </Col>
  );
};

export default HomeCard;
