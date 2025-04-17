import { Variants } from "motion/react";

export const variants: Variants = {
  initial: { left: 0 },
  signin: {
    left: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
  forgotPassword: {
    left: "-100%",
    transition: { duration: 0.7, ease: "easeOut" },
  },
};
