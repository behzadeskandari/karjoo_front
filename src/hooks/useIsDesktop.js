import React from "react";
import { useWindowDimensions } from "./useWindowDimensions";

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = React.useState(false);
  const dimensions = useWindowDimensions();

  React.useEffect(() => {
    setIsDesktop(dimensions.width >= 769);
  }, [dimensions]);

  return isDesktop;
}
