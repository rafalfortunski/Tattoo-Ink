import { useState } from "react";

export function useVisibility() {
  const [isVisible, setVisibility] = useState(false);
  const visibilityHandler = () => setVisibility(!isVisible);

  return { isVisible, visibilityHandler };
}
