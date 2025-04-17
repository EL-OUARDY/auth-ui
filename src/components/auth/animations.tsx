import { Variants } from "motion/react";

const ANIMATION_DURATION = 1;

export const containerVariants: Variants = {
  initial: { x: 0 },
  signin: {
    x: 0,
    transition: { duration: ANIMATION_DURATION },
  },
  signup: {
    x: "-36rem",
    transition: { duration: ANIMATION_DURATION },
  },
};

export const sidePanelVariants: Variants = {
  // initial: {},
  // signin: (w) => ({
  //   width: [w, w + 101, w],
  //   transition: { duration: ANIMATION_DURATION, times: [0, 0.3, 1] },
  // }),
  // signup: (w) => ({
  //   width: [w, w + 100, w],
  //   transition: { duration: ANIMATION_DURATION, times: [0, 0.3, 1] },
  // }),
};

export const propmtBtnVariants: Variants = {
  initial: { x: 0 },
  signin: {
    x: 0,
    transition: { duration: ANIMATION_DURATION + 0.2 },
  },
  signup: {
    x: "-100%",
    transition: { duration: ANIMATION_DURATION + 0.2 },
  },
};

export const signInVariants: Variants = {
  initial: { x: 0 },
  signin: {
    x: 0,
    transition: { duration: ANIMATION_DURATION - 0.3, delay: 0.3 },
  },
  signup: {
    x: "100%",
    transition: { duration: ANIMATION_DURATION - 0.3 },
  },
};

export const signUpVariants: Variants = {
  initial: { x: "-100%" },
  signin: {
    x: "-100%",
    transition: { duration: ANIMATION_DURATION - 0.3 },
  },
  signup: {
    x: 0,
    transition: { duration: ANIMATION_DURATION - 0.3, delay: 0.3 },
  },
};

export const bgShapesVariants: Variants = {
  initial: { x: 0 },
  signin: {
    x: 0,
    transition: { duration: ANIMATION_DURATION + 0.2, ease: "easeInOut" },
  },
  signup: {
    x: "-14%",
    transition: { duration: ANIMATION_DURATION + 0.2, ease: "easeInOut" },
  },
};
