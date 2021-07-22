import { FC } from "react";
import Col from "react-bootstrap/Col";

const FeatureCol: FC<{ title: string }> = ({ title, children }) => {
  return (
    <Col md={4}>
      <h3>{title}</h3>
      <p>{children}</p>
    </Col>
  );
};

export default FeatureCol;
