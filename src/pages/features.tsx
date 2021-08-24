import { FC } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  chunkedFeatures,
  chunkedPlanFeatures,
  FeatureCol,
  FeatureRow,
} from "@modules/Features";
import Layout from "@modules/Layout";

const StreamPiFeatures: FC = () => {
  return (
    <Layout
      title="Features"
      description="The Stream-Pi has a large variety of features, see about some of the most notable ones here!"
      flipOrder
    >
      {/* title */}
      <Row className="pt-3 animate__animated animate__fadeIn">
        <Col className="text-center">
          <h1>What makes the Stream-Pi Great?</h1>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <p>
            For more in depth information, please check our our documentation.
          </p>
        </Col>
      </Row>
      {/* existing features */}
      {chunkedFeatures.map((feat, idx) => (
        <FeatureRow key={`implementedRow${idx}`}>
          {feat.map((item, idxx) => (
            <FeatureCol key={`row${idx}Imp${idxx}`} title={item.title}>
              {item.desc}
            </FeatureCol>
          ))}
        </FeatureRow>
      ))}
      {/* planned features */}
      <Row className="pt-5">
        <Col className="text-center animate__animated animate__fadeInUp">
          <h1>Planned Features</h1>
          <p className="mb-0">If it has API we'll give it a try!</p>
        </Col>
      </Row>
      {chunkedPlanFeatures.map((feat, idx) => (
        <FeatureRow key={`planRow${idx}`}>
          {feat.map((item, idxx) => (
            <FeatureCol key={`row${idx}Plan${idxx}`} title={item.title}>
              {item.desc}
            </FeatureCol>
          ))}
        </FeatureRow>
      ))}
    </Layout>
  );
};

export default StreamPiFeatures;
