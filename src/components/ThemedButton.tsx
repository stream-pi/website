import React from "react";
import Button from "react-bootstrap/Button";

type IProps = React.ComponentProps<typeof Button>;
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

// interface Props extends React.ComponentProps<typeof Button> {
//   newVariant?: React.ComponentProps<typeof Button>["variant"];
// }

// const ThemedButton: React.FC<Props> = ({ newVariant, ...props }) =>
//   global.isLightMode ? (
//     <Button
//       variant={`outline-${newVariant || "primary"}`}
//       {...(props as React.ComponentProps<Button>)}
//     />
//   ) : (
//     <Button
//       variant={newVariant || "primary"}
//       {...(props as React.ComponentProps<typeof Button>)}
//     />
//   );

// export default ThemedButton;
