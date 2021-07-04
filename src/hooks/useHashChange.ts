import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

/**
 * This is a custom hook that we have to use for any all all hash URL's.
 * This is a very hacky solution but it works so we'll use it
 *
 * @see {@link useRouter}
 */
function useHashChange() {
  const { asPath } = useRouter();
  const time = useRef<any>();
  useEffect(() => {
    if (/#.+/g.test(asPath)) {
      const id = asPath.replace(/\/.*#(.+)/g, "$1");
      const el = window.document.getElementById(id);
      if (el) {
        time.current = setTimeout(() => {
          const r = el.getBoundingClientRect();
          window.top.scroll({
            top: pageYOffset + r.top,
            behavior: "smooth",
          });
        }, 100);
      }
    }
    return () => clearTimeout(time.current);
  }, [asPath]);
}

export default useHashChange;
