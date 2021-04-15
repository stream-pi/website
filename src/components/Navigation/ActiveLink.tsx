import React, { Children } from "react";
import Link, { LinkProps } from "next/link";
import { useRegexAsPath } from "@util";

export type ActiveLinkProps = LinkProps & {
  activeClassName: string;
};

const ActiveLink: React.FC<ActiveLinkProps> = ({
  children,
  activeClassName,
  ...props
}) => {
  const asPath = useRegexAsPath();
  const child = Children.only(children);
  const childClassName = (child as React.ReactElement).props.className || "";

  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child as React.ReactElement, {
        className: className || null,
      })}
    </Link>
  );
};

export default ActiveLink;
