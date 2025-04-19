import { Variants } from "motion/react";

export const variants: Variants = {
  initial: { x: 0 },
  signin: {
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
  forgotPassword: {
    x: "-100%",
    transition: { duration: 0.7, ease: "easeOut" },
  },
};
