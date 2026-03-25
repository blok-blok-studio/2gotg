"use client";

import { useState, useEffect } from "react";

/**
 * Returns true only on devices that support hover (not touch-only).
 * Prevents Framer Motion whileHover from causing jank on mobile.
 */
export function useHoverCapable() {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  return canHover;
}
