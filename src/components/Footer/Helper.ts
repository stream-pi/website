import { ReactNode } from "react";

export type FooterProps = {
  footerColumns: ReactNode;
};

export type FooterLink = {
  name: string;
  href: string;
};

export type FooterColProps = {
  header: string;
  links: FooterLink[];
};
