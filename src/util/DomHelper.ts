import { RefObject } from "react";

/**
 * utility qrapper for `{ELEMENT}.querySelector()`
 */
export function qs<T extends HTMLElement>(
  element: T | Document,
  selectors: string
) {
  return element.querySelector<HTMLElement>(selectors);
}

/**
 * utility wraooer for `{ELEMENT}.querySelectorAll()`
 */
export function qsa<T extends HTMLElement>(
  element: T | Document,
  selectors: string
): HTMLElement[] {
  return Array.from(element.querySelectorAll(selectors));
}

/**
 * Helper function that will resolve the input arguement to a HTML element if possible
 *
 * @param target either a HTML ekement or a ref object pointing to a HTML element
 */
export function resolveElement<T extends HTMLElement>(
  target: T | RefObject<T>
) {
  if (target && "current" in target) return target.current;
  if (target?.nodeType) return target;
  return null;
}
