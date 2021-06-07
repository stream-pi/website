import type { LinkProps } from "next/link";
import { useRouter } from "next/router";

export type ActiveLinkProps = LinkProps & {
  activeClassName: string;
};

export type ItemProps = Omit<ActiveLinkProps, "href" | "activeClassName"> & {
  to: string;
};

/**
 * To be written
 *
 * @returns the router's `asPath` variable, having been formatted
 */
export function useRegexAsPath() {
  const { asPath } = useRouter();
  // Queries and hashes
  const asPathTwo = /(#.*|\?.+=.*)/g.test(asPath)
    ? asPath.replace(/(#.*|\?.+=.*)/g, "")
    : asPath;

  // Nested Paths
  const asPathThree = asPathTwo.replace(
    /^(\/[A-Za-z\-0-9]+)(?:\/[A-Za-z\-0-9]+)+/i,
    "$1"
  );

  return asPathThree;
}
