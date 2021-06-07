import { FC } from "react";
import Row from "react-bootstrap/Row";

const FirstFeatRow: FC<{ idx: number }> = ({ idx, children }) => {
  const padding = ["pt-3"];
  const animation = ["animate__animated", "animate__fadeInUp"];
  if (idx > 0) {
    padding.push("pt-md-4");
  }
  const classes = [...padding, ...animation].toString().replace(/,/gm, " ");
  return <Row className={classes}>{children}</Row>;
};

export default FirstFeatRow;
