import { resolveElement } from "@util/DomHelper";
import { RefObject, useEffect, useRef } from "react";
import useIsomorphicLayoutEffect from "./use-isomorphic-layout-effect";

/**
 * Simplifies the binding of event listeners on mount and removal of listeners on unmount while making sure re-renders are minimized.
 *
 * It takes as parameters
 * - The reference element (document, window, element, or element ref)
 * - The event name ot listen to `eventName`
 * - A call-back function `(handler)`
 * - additional event listener options {@link AddEventListenerOptions}
 *
 * @author SamuelQuinones <squinones@stream-pi.com>
 */
function useEventListener<K extends keyof WindowEventMap>(
  element: "window",
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
): void;
/**
 * Simplifies the binding of event listeners on mount and removal of listeners on unmount while making sure re-renders are minimized.
 *
 * It takes as parameters
 * - The reference element (document, window, element, or element ref)
 * - The event name ot listen to `eventName`
 * - A call-back function `(handler)`
 * - additional event listener options {@link AddEventListenerOptions}
 *
 * @author SamuelQuinones <squinones@stream-pi.com>
 */
function useEventListener<K extends keyof DocumentEventMap>(
  element: "document",
  eventName: K,
  handler: (event: DocumentEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
): void;
/**
 * Simplifies the binding of event listeners on mount and removal of listeners on unmount while making sure re-renders are minimized.
 *
 * It takes as parameters
 * - The reference element (document, window, element, or element ref)
 * - The event name ot listen to `eventName`
 * - A call-back function `(handler)`
 * - additional event listener options {@link AddEventListenerOptions}
 *
 * @author SamuelQuinones <squinones@stream-pi.com>
 */
function useEventListener<
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement = HTMLDivElement
>(
  element: T | RefObject<T>,
  eventName: K,
  handler: (event: HTMLElementEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
): void;

/**
 * Simplifies the binding of event listeners on mount and removal of listeners on unmount while making sure re-renders are minimized.
 *
 * It takes as parameters
 * - The reference element (document, window, element, or element ref)
 * - The event name ot listen to `eventName`
 * - A call-back function `(handler)`
 * - additional event listener options {@link AddEventListenerOptions}
 *
 * @author SamuelQuinones <squinones@stream-pi.com>
 */
function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  KD extends keyof DocumentEventMap,
  T extends HTMLElement
>(
  element: "window" | "document" | T | RefObject<T>,
  eventName: KW | KH | KD,
  handler: (
    event:
      | WindowEventMap[KW]
      | HTMLElementEventMap[KH]
      | DocumentEventMap[KD]
      | Event
  ) => void,
  options?: boolean | AddEventListenerOptions
) {
  // Create a ref that stores handler
  const savedHandler = useRef(handler);

  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Define the listening target
    let tarEl: T | Document | Window;
    if (element === "document") tarEl = document;
    else if (element === "window") tarEl = window;
    else tarEl = resolveElement<T>(element) ?? window;

    if (!(tarEl && tarEl.addEventListener)) {
      return;
    }

    // Create event listener that calls handler function stored in ref
    const eventListener: typeof handler = (event) =>
      savedHandler.current(event);

    tarEl.addEventListener(eventName, eventListener, options);

    // Remove event listener on cleanup
    return () => {
      tarEl.removeEventListener(eventName, eventListener, options);
    };
  }, [eventName, element, options]);
}

export default useEventListener;
