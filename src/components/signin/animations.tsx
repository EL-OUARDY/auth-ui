import { Variants } from "motion/react";

export const variants: Variants = {
  initial: { left: 0 },
  signin: {
    left: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
  forgotPassword: {
    left: "-100%",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};
