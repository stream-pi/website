import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import type { FirstCard } from "./Helper";

const FirstCardComp: React.FC<FirstCard> = ({
  cardTitle,
  img,
  description,
}) => {
  return (
    <Col md={4} className="pb-5 pb-md-0 text-center">
      <Card className="bg-card h-100 firstCard">
        <Card.Body className="p-3">
          <img
            src={img}
            style={{ height: "130px" }}
            alt={`First ${cardTitle}`}
          />
          <h5>{cardTitle}</h5>
          <p>{description}</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default FirstCardComp;
