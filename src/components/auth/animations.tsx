import { Variants } from "motion/react";

export const propmtBtnVariants: Variants = {
  initial: { left: 0 },
  signin: {
    left: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
  signup: {
    left: "-100%",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const containerVariants: Variants = {
  initial: { left: 0 },
  signin: {
    left: 0,
    transition: { duration: 0.7 },
  },
  signup: {
    left: "-66.66%",
    transition: { duration: 0.7 },
  },
};

export const sidePanelVariants: Variants = {
  signin: (w) => ({
    width: [w, w + 100, w],
    transition: { duration: 0.7, ease: "linear" },
  }),
  signup: (w) => ({
    width: [w, w + 100, w],
    transition: { duration: 0.7, ease: "linear" },
  }),
};
