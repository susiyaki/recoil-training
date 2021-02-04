import { useEffect } from "react";
import { useRecoilSnapshot } from "recoil";

export function DebugObserver() {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.debug("The following atoms were modified:");
    Array.from(snapshot.getNodes_UNSTABLE({ isModified: true })).forEach(
      (node) => {
        console.debug(node.key, snapshot.getLoadable(node));
      }
    );
  }, [snapshot]);

  return null;
}
