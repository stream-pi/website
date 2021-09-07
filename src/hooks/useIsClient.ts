import { useEffect, useState } from "react";

/**
 * This React Hook can be useful in a SSR environment to wait until be in a browser to execution some functions.
 */
function useIsClient() {
  const [isClient, setIsClient] = useState(false);
  //? should this have a useEffect cleanup?
  useEffect(() => {
    setIsClient(true);
    return () => {
      setIsClient(false);
    };
  }, []);

  return isClient;
}

export default useIsClient;
