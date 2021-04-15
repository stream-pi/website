import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RowCol: React.FC<{ className?: string }> = ({ children, className }) => {
  return (
    <Row className={`${className} text-center`}>
      <Col>{children}</Col>
    </Row>
  );
};
export default RowCol;
