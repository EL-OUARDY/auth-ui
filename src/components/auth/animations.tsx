import { Variants } from "motion/react";

export const ANIMATION_DURATION = 1.2;

export const formsContainerVariants: Variants = {
  initial: { x: 0 },
  signin: {
    x: 0,
    transition: { duration: ANIMATION_DURATION },
  },
  signup: {
    x: "-18rem",
    transition: { duration: ANIMATION_DURATION },
  },
};

export const signInVariants: Variants = {
  initial: { x: 0 },
  signin: {
    x: 0,
    transition: { duration: ANIMATION_DURATION },
  },
  signup: {
    x: "100%",
    transition: { duration: ANIMATION_DURATION },
  },
};

export const signUpVariants: Variants = {
  initial: { x: "-100%" },
  signin: {
    x: "-100%",
    transition: { duration: ANIMATION_DURATION },
  },
  signup: {
    x: 0,
    transition: { duration: ANIMATION_DURATION },
  },
};
