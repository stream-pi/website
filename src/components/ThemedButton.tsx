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

// export const ThemedButton = React.forwardRef<any, IProps>((props, ref) => {
//   const { variant, ...rest } = props;
//   return global.isLightMode ? (
//     <Button ref={ref} variant={`outline-${variant || "primary"}`} {...rest} />
//   ) : (
//     <Button ref={ref} variant={variant || "primary"} {...rest} />
//   );
// });

// ThemedButton.displayName = "ThemedButton";

// export default ThemedButton;
