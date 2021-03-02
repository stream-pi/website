import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FirstCard, ChunkedFirst } from "@helpers/FirstHelper";
import StreamPiSEO from "@StreamPi/SEO";

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

const FirstFeatRow: React.FC<{ idx: number }> = ({ idx, children }) => {
  const padding = ["pt-3"];
  const animation = ["animate__animated", "animate__fadeInUp"];
  if (idx > 0) {
    padding.push("pt-md-4");
  }
  const classes = [...padding, ...animation].toString().replace(/,/gm, " ");
  return <Row className={classes}>{children}</Row>;
};

const StreamPiFirst: React.FC = () => {
  return (
    <React.Fragment>
      <StreamPiSEO
        title="First"
        description="New to Stream-Pi, learn about some basic actions here!"
        flipOrder
      />
      <Row className="pt-3 animate__animated animate__fadeIn animate__slow">
        <Col className="text-center">
          <h1>Congratulations!</h1>
          <h2 className="h3">You just clicked on your first action!</h2>
          <p>Learn how to make more here!</p>
        </Col>
      </Row>
      {ChunkedFirst.map((arr, idx) => (
        <FirstFeatRow idx={idx} key={`cardRow${idx}`}>
          {arr.map(({ cardTitle, description, img }, idxx) => (
            <FirstCardComp
              key={`row${idx}card${idxx}`}
              cardTitle={cardTitle}
              img={img}
              description={description}
            />
          ))}
        </FirstFeatRow>
      ))}
      {/* <div className="py-3" /> */}
    </React.Fragment>
  );
};

export default StreamPiFirst;
