import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import type { OBJ } from "./Types";

dayjs.extend(advancedFormat);

/**
 * This is a custom hook that we have to use for any all all hash URL's.
 * This is a very hacky solution but it works so we'll use it
 *
 * **CAN NOT HAVE A DEPENDENCY ARRAY**
 */
export const useHashChange = () => {
  useEffect(() => {
    const path = window.location.hash;
    if (path && path.includes("#")) {
      setTimeout(() => {
        const id = path.replace("#", "");
        const el = window.document.getElementById(id);
        const r = el?.getBoundingClientRect();
        window.top.scroll({
          top: pageYOffset + (r?.top || 0),
          behavior: "smooth",
        });
      }, 100);
    }
  });
};

/**
 * Function used to handle any query that needs to get information for either the server or the client repo.
 *
 * @param query - The URL query, should only ever be a single query
 * @returns the global variable representing the repository name or "Bad_call"
 */
export function queryParser(query: string | string[]) {
  switch (query) {
    case "CLIENT":
      return "client";
    case "SERVER":
      return "server";
    default:
      return "Bad_Call";
  }
}

/**
 * Takes in an **array** and a **number** to produce a new two dimmensional array.
 * These smaller arrays have a max length equal to the input number
 *
 * @template T any type
 * @param array source array to be chunked
 * @param chunkSize the max number of elements to go in each new sub-array
 * @returns Two-Dimmensional Array of type T
 *
 * @example
 * //* returns [[1,2],[3,4]]
 * chunkArray([1,2,3,4],2);
 */
export function chunkArray<T>(array: T[], chunkSize: number) {
  const numberOfChunks = Math.ceil(array.length / chunkSize);

  return Array.from(Array(numberOfChunks)).map((_value, index) => {
    return array.slice(index * chunkSize, (index + 1) * chunkSize);
  });
}

/**
 * Capitalizes the first letter of an input string
 *
 * @param str string to modify
 * @returns modified string
 *
 * @example
 * //* returns "Stream-pi"
 * capitalize("stream-pi")
 */
export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Takes in an array of objects, and produces a new Set of a common object property value.
 *
 * @param arr array of objects
 * @param key string, key of object
 *
 * @example
 * type Person = {name: string, age: number};
 * const people: Person[] = [{name: "Bob", age: 24},{name: "Mark", age: 20}]
 * //* returns ["Bob", "Mark"]
 * propertySet(people, "name");
 */
export function propertySet<T extends OBJ>(arr: T[], key: keyof T) {
  return new Set(arr.map((obj) => obj[key]));
}

/**
 * Takes in an object and tests to see if this object is empty.
 *
 * - If the object has any proprties, returns false.
 * - If the object when stringified equals "{}", returns true
 *
 * @param obj object to test emptiness of
 * @returns boolean reflecting "is this object empty?"
 *
 * @example
 * const emptyObj = {};
 * //* returns true
 * isEmpty(emptyObj);
 * @example
 * const nonEmpty = {property: "value"};
 * //* returns false
 * isEmpty(nonEmpty);
 */
export function isEmpty(obj: OBJ) {
  for (const prop in obj) {
    if (obj[prop]) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

/**
 * Utility function to replace `JSON.stringify(something, null, 2)`
 *
 * @param obj
 * @returns stringified JSON object
 */
export function prettyPrint(obj: OBJ) {
  return JSON.stringify(obj, null, 2);
}

/**
 * Takes in any date like data and will transform it into a more human readable string.
 *
 * @see dayjs.ConfigType
 *
 * @param dateIn any date like input that dayjs can parse
 * @returns date string formatted as: MMMM, Do, YYYY
 *
 * @example
 * //* returns April 2nd, 2021
 * const today = printOutDate("2021-04-02 14:41:53");
 * const today_two = printOutDate(new Date(2021, 3, 2));
 */
export function printOutDate(dateIn: dayjs.ConfigType) {
  return dayjs(dateIn).format("MMMM Do, YYYY");
}

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

/**
 * Checks if a container's immediate child is in our out of the overflow view
 *
 * @param container HTMLcontaining element
 * @param element element in / out of view
 */
export function checkIfElementInView(
  container?: HTMLElement,
  element?: HTMLElement
) {
  if (!container || !element) {
    console.error("One or both elements was not defined at call time");
    return;
  }
  //* container top
  const cTop = container.scrollTop;
  //* container bottom
  const cBottom = cTop + container.clientHeight;

  //* element top
  const eTop = element.offsetTop;
  //* element bottom
  const eBottom = eTop + element.clientHeight;

  //* check if out of view
  if (eTop < cTop) {
    container.scrollTop -= cTop - eTop;
  } else if (eBottom > cBottom) {
    container.scrollTop += eBottom - cBottom;
  }
}

/**
 * lightweight custom hook that will return a boolean reflecting the current mount state of the component
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
