import { forwardRef } from "react";
import BsButton, { ButtonProps } from "react-bootstrap/Button";
import classNames from "classnames";

type StreamPiButtonProps = ButtonProps & {
  shape?: "square" | "pill" | "default";
};

const Button = forwardRef<HTMLElement, StreamPiButtonProps>(
  ({ className, shape, as, variant = "primary", ...props }, ref) => {
    //* Setup
    const classes = classNames(className, {
      "rounded-0": shape === "square",
      "rounded-pill": shape === "pill",
    });

    //* Should use if outline will be its own prop...
    // const newVariant = classNames({
    //   outline: outline || variant.includes("outline"),
    //   [variant.replace("outline-", "")]: true,
    // }).replace(/[\s]+/gi, "-");

    return (
      <BsButton
        as={as}
        ref={ref}
        variant={variant}
        {...props}
        className={classes}
      />
    );
  }
);

Button.displayName = "StreamPiButton";
export default Button;
