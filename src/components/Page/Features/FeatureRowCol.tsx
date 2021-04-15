import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const FeatureRow: React.FC = ({ children }) => {
  return (
    <Row className="pt-5 text-center animate__animated animate__fadeInUp">
      {children}
    </Row>
  );
};

export const FeatureCol: React.FC<{ title: string }> = ({
  title,
  children,
}) => {
  return (
    <Col md={4}>
      <h3>{title}</h3>
      <p>{children}</p>
    </Col>
  );
};
