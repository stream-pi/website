import { useEffect, useRef, useState } from "react";

/**
 *
 * @param totalTime countdown length in `MS`
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
