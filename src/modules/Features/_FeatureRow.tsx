import { FC } from "react";
import Row from "react-bootstrap/Row";

const FeatureRow: FC = ({ children }) => {
  return (
    <Row className="pt-5 text-center animate__animated animate__fadeInUp">
      {children}
    </Row>
  );
};

export default FeatureRow;
