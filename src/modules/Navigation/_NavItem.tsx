import { FC } from "react";
import NavLink from "react-bootstrap/NavLink";
import ActiveLink from "./_ActiveLink";
import { ItemProps } from "./Helper";

const StreamPiNavItem: FC<ItemProps> = ({ children, to, ...props }) => {
  return (
    <ActiveLink
      activeClassName="active fw-bold text-decoration-underline"
      href={to}
      {...props}
      passHref
    >
      {/* <a className="btn nav-item nav-link w-100 mx-0 mx-md-3">{children}</a> */}
      <NavLink className="w-100 mx-0 mx-md-3" title={to} active={false}>
        {children}
      </NavLink>
    </ActiveLink>
  );
};

export default StreamPiNavItem;
