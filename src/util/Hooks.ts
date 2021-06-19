import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

/**
 * This is a custom hook that we have to use for any all all hash URL's.
 * This is a very hacky solution but it works so we'll use it
 *
 * @see {@link useRouter}
 */
export const useHashChange = () => {
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
};

/**
 * lightweight custom hook that will return a boolean reflecting the current mount state of the component.
 *
 * When used, the component will be hidden until just before the first paint. This is useful for SSR and animated components
 *
 * @returns is the component mounted?
 */
export function useRenderOnMount() {
  const [mounted, setMounted] = useState(false);
  //* is a separate useEffect to ensure this happens only once
  //? should this have a useEffect cleanup?
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

/**
 *
 * @param totalTime countdown length in `MS`
 * @param changeInterval the interval subtracted from `totalTime`
 * @returns seconds remaining and if the countdown is still going
 */
export function useCountDown(totalTime: number) {
  const [counting, setCounting] = useState(true);
  const [remainingSeconds, setRemainingSeconds] = useState(totalTime / 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("Interval");
      setRemainingSeconds((initial) => initial - 1);
    }, 1000);
    const timeout = setTimeout(() => {
      // console.log("Timeout");
      clearInterval(interval);
      setCounting(false);
    }, totalTime);

    return () => {
      clearInterval(interval);
      clearInterval(timeout);
    };
  }, [totalTime]);

  return {
    counting,
    remainingSeconds,
  };
}

/**
 * Uses `ref` objects to store interval and timeout
 *
 * @param totalTime countdown length in `MS`
 * @param changeInterval the interval subtracted from `totalTime`
 * @returns seconds remaining and if the countdown is still going
 */
export function useCountDownRef(totalTime: number) {
  const [counting, setCounting] = useState(true);
  const [remainingSeconds, setRemainingSeconds] = useState(totalTime / 1000);

  const interval = useRef<any>();
  const timeout = useRef<any>();

  useEffect(() => {
    interval.current = setInterval(() => {
      // console.log("Interval");
      setRemainingSeconds((initial) => initial - 1);
    }, 1000);
    timeout.current = setTimeout(() => {
      // console.log("Timeout");
      clearInterval(interval.current);
      setCounting(false);
    }, totalTime);

    return () => {
      clearInterval(interval.current);
      clearInterval(timeout.current);
    };
  }, [totalTime]);

  return {
    counting,
    remainingSeconds,
  };
}
