import { useEffect, MutableRefObject, RefObject, useCallback } from "react";

function useOutsideClick<T extends HTMLElement>(
  ref: MutableRefObject<T> | RefObject<T>,
  callback: () => any,
  options?: boolean | AddEventListenerOptions
) {
  //* setup the callback
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
        callback();
      }
    },
    [callback, ref]
  );

  //* Add the listener
  useEffect(() => {
    document.addEventListener("click", handleClick, options);
    return () => {
      document.removeEventListener("click", handleClick, options);
    };
  }, [handleClick, options]);
}

export default useOutsideClick;
