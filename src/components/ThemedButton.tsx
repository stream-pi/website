import React from "react";
import Button from "react-bootstrap/Button";

interface Props extends React.ComponentProps<Button> {
  newVariant?: React.ComponentProps<Button>["variant"];
}

const ThemedButton: React.FC<Props> = ({ newVariant, ...props }) =>
  global.isLightMode ? (
    <Button
      variant={`outline-${newVariant || "primary"}`}
      {...(props as React.ComponentProps<Button>)}
    />
  ) : (
    <Button
      variant={newVariant || "primary"}
      {...(props as React.ComponentProps<Button>)}
    />
  );

export default ThemedButton;
