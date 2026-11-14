import * as React from "react";

const subscribe = () => () => {};

/**
 * Returns `false` on the server and during hydration, `true` afterwards.
 * Hydration-safe replacement for the `useEffect(() => setMounted(true), [])`
 * pattern, without the extra cascading render.
 */
export function useMounted() {
  return React.useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
