import { useEffect } from "react";

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
        const r = el.getBoundingClientRect();
        window.top.scroll({
          top: pageYOffset + r.top,
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
      return process.env.NEXT_PUBLIC_CLIENT_REPO;
    case "SERVER":
      return process.env.NEXT_PUBLIC_SERVER_REPO;
    default:
      return "Bad_Call";
  }
}

/**
 * Takes in an **array** and a **number** to produce a new two dimmensional array.
 * These smaller arrays have a max length equal to the input number
 *
 * @param array source array to be chunked
 * @param chunkSize the max number of elements to go in each new sub-array
 * @returns Two-Dimmensional Array of type T
 *
 * @example
 * // returns [[1,2],[3,4]]
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
 * // returns "Stream-pi"
 * capitalize("stream-pi")
 */
export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Takes in an array of objects, and produces a new Set of a common object property value.
 *
 * @param arr array of objects type T
 * @param key string, key of object T
 *
 * @example
 * type Person = {name: string, age: number};
 * const people: Person[] = [{name: "Bob", age: 24},{name: "Mark", age: 20}]
 * // returns ["Bob", "Mark"]
 * propertySet(people, "name");
 */
export function propertySet<T extends object>(arr: T[], key: keyof T) {
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
 * // returns true
 * isEmpty(emptyObj);
 * @example
 * const nonEmpty = {property: "value"};
 * // returns false
 * isEmpty(nonEmpty);
 */
export function isEmpty<T extends object>(obj: T) {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}
