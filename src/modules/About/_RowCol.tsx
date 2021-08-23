import { FC } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classNames from "classnames";

const RowCol: FC<{ className?: string }> = ({ children, className }) => {
  const cn = classNames("text-center", className);
  return (
    <Row className={cn}>
      <Col>{children}</Col>
    </Row>
  );
};
export default RowCol;
