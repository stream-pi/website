import Head from "next/head";
import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FirstCard, ChunkedFirst } from "@helpers/FirstHelper";
import SEO from "@StreamPi/SEO";

const FirstCardComp: React.FC<FirstCard> = (props) => {
  return (
    <Col md={4} className="pb-5 pb-md-0 text-center">
      <Card className="bg-card h-100 firstCard">
        <Card.Body className="p-1">
          <img
            src={props.img}
            style={{ height: "130px" }}
            alt={`First ${props.cardTitle}`}
          />
          <h5>{props.cardTitle}</h5>
          <p>{props.description}</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

const FirstFeatRow: React.FC<{ idx: number }> = (props) => {
  const padding = ["pt-5"];
  const animation = ["animate__animated", "animate__fadeInUp"];
  if (props.idx > 0) {
    padding.push("pt-md-4");
  }
  const classes = [...padding, ...animation].toString().replace(/,/gm, " ");
  return <Row className={classes}>{props.children}</Row>;
};

const StreamPiFirst: React.FC = () => {
  return (
    <React.Fragment>
      <SEO
        title="First"
        description="New to Stream-Pi, learn about some basic actions here!"
        flipOrder
      />
      <Row className="pt-3 animate__animated animate__fadeIn animate__slow">
        <Col className="text-center">
          <h1>Congratulations!</h1>
          <h3>You just clicked on your first action!</h3>
          <p>Learn how to make more here!</p>
        </Col>
      </Row>
      {ChunkedFirst.map((arr, idx) => (
        <FirstFeatRow idx={idx} key={`cardRow${idx}`}>
          {arr.map((item, idxx) => (
            <FirstCardComp
              key={`row${idx}card${idxx}`}
              cardTitle={item.cardTitle}
              img={item.img}
              description={item.description}
            />
          ))}
        </FirstFeatRow>
      ))}
      <div className="py-3" />
    </React.Fragment>
  );
};

export default StreamPiFirst;
