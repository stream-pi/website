import { FC } from "react";
import NavLink from "react-bootstrap/NavLink";
import ActiveLink from "./_ActiveLink";
import { ItemProps } from "./Helper";

const StreamPiNavItem: FC<ItemProps> = ({ children, to, title, ...props }) => {
  return (
    <ActiveLink
      activeClassName="active fw-bold text-decoration-underline"
      href={to}
      {...props}
      passHref
    >
      <NavLink
        className="w-100 mx-0 mx-md-3 text-center"
        title={title}
        active={false}
      >
        {children}
      </NavLink>
    </ActiveLink>
  );
};

export default StreamPiNavItem;
