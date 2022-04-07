import { useEffect, useLayoutEffect } from "react";

/**
 * A utility hook for conditionally calling {@link useLayoutEffect} or {@link useEffect} depending on the execution environment.
 *
 * Mostly used to use the {@link useLayoutEffect} hook and gettings NextJS to stop throwing console warnings.
 *
 * @author SamuelQuinones <squinones@stream-pi.com>
 */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
