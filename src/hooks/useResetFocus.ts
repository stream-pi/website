import { useEffect } from "react";
import { useRouter } from "next/router";

function useResetFocus() {
  const { events } = useRouter();

  const _focus = () => {
    document.body.setAttribute("tabIndex", "-1");
    document.body.focus();
  };

  const _reset = () => {
    document.body.removeAttribute("tabIndex");
  };

  useEffect(() => {
    events.on("routeChangeStart", _focus);
    events.on("routeChangeComplete", _reset);

    return () => {
      events.off("routeChangeStart", _focus);
      events.off("routeChangeComplete", _reset);
    };
  }, [events]);
}

export default useResetFocus;
