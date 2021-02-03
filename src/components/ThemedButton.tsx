import React from "react";
import Button from "react-bootstrap/Button";

type IProps = React.ComponentProps<Button>;
export default class ThemedButton extends React.Component<IProps> {
  render() {
    const { variant, ...rest } = this.props;

    return global.isLightMode ? (
      <Button variant={`outline-${variant || "primary"}`} {...rest} />
    ) : (
      <Button variant={variant || "primary"} {...rest} />
    );
  }
}

// const ThemedButton: React.FC<IProps> = ({ variant, ...rest }) =>
//   global.isLightMode ? (
//     <Button variant={`outline-${variant || "primary"}`} {...rest} />
//   ) : (
//     <Button variant={variant || "primary"} {...rest} />
//   );

// export default ThemedButton;
