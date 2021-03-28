// TODO: Fix active class for /install subdirectories

import React, { Children } from "react";
import { LinkProps } from "next/link";
import { useRouter } from "next/router";
import Link from "next/link";
import NavLink from "react-bootstrap/NavLink";

type Props = React.ComponentProps<typeof Link> & {
  activeClassName: string;
};

type ItemProps = {
  to: string;
  as?: LinkProps["as"];
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  prefetch?: boolean;
  locale?: string | false;
};

const ActiveLink: React.FC<Props> = ({
  children,
  activeClassName,
  ...props
}) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = (child as React.ReactElement).props.className || "";

  const asPathTwo = /(#.*|\?.+=.*)/g.test(asPath)
    ? asPath.replace(/(#.*|\?.+=.*)/g, "")
    : asPath;

  const asPathThree = asPathTwo.replace(
    /^(\/[A-Za-z\-0-9]+)(?:\/[A-Za-z\-0-9]+)+/i,
    "$1"
  );

  const className =
    asPathThree === props.href || asPathThree === props.as
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

const StreamPiNavItem: React.FC<ItemProps> = ({ children, to, ...props }) => {
  return (
    <ActiveLink activeClassName="active" href={to} {...props} passHref>
      {/* <a className="btn nav-item nav-link w-100 mx-0 mx-md-3">{children}</a> */}
      <NavLink className="btn nav-item w-100 mx-0 mx-md-3" active={false}>
        {children}
      </NavLink>
    </ActiveLink>
  );
};

export default StreamPiNavItem;
