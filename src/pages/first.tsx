import { FC } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import StreamPiSEO from "@components/StreamPiSEO";
import {
  ChunkedFirst,
  FirstCardComp,
  FirstFeatRow,
} from "@components/Page/First";

const StreamPiFirst: FC = () => {
  return (
    <>
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
    </>
  );
};

export default StreamPiFirst;
