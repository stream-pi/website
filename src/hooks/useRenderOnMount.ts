import { useEffect, useState } from "react";

/**
 * lightweight custom hook that will return a boolean reflecting the current mount state of the component.
 *
 * When used, the component will be hidden until just before the first paint. This is useful for SSR and animated components
 *
 * @returns is the component mounted?
 */
function useRenderOnMount() {
  const [mounted, setMounted] = useState(false);
  //? should this have a useEffect cleanup?
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted;
}

export default useRenderOnMount;
