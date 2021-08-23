import { forwardRef } from "react";
import { ButtonVariant } from "react-bootstrap/types";
import { useButtonProps, ButtonProps } from "@restart/ui/Button";
import classNames from "classnames";

type StreamPiButtonProps = ButtonProps & {
  as?: keyof JSX.IntrinsicElements;
  active?: boolean;
  variant?: ButtonVariant;
  shape?: "square" | "pill" | "default";
  size?: "sm" | "lg";
};

const Button = forwardRef<HTMLElement, StreamPiButtonProps>(
  (
    {
      as,
      variant = "primary",
      size,
      active = false,
      className,
      disabled = false,
      shape,
      ...props
    },
    ref
  ) => {
    const [buttonProps, { tagName: Component }] = useButtonProps({
      tagName: as,
      disabled,
      ...props,
    });

    return (
      <Component
        {...props}
        {...buttonProps}
        ref={ref}
        className={classNames(
          "btn",
          variant && `btn-${variant}`,
          active && "active",
          size && `btn-${size}`,
          {
            disabled: props.href && disabled,
            "rounded-0": shape === "square",
            "rounded-pill": shape === "pill",
          },
          className
        )}
      />
    );
  }
);

Button.displayName = "StreamPiButton";
export default Button;
