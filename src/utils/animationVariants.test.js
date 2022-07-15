import { describe, it, expect } from "vitest";
import { createOpacityVariants } from "./animationVariants";

describe("animationVariants", () => {
  it("creates variants with increasing delays", () => {
    const variants = createOpacityVariants(3);
    expect(variants).toEqual([
      {
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.5,
          },
        },
      },
      {
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.75,
          },
        },
      },
      {
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            duration: 1,
            delay: 1,
          },
        },
      },
    ]);
  });
});
