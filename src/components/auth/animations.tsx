import { Variants } from "motion/react";
import { FormType } from "./Auth";

export const ANIMATION_DURATION = 1;

export const formsContainerVariants: Variants = {
  initial: ({ width, initialForm }) => {
    if (initialForm === "signin")
      return {
        x: 0,
      };
    return {
      x: `-${width}`,
    };
  },
  signin: {
    x: 0,
    transition: { duration: ANIMATION_DURATION },
  },
  signup: ({ width }) => ({
    x: `-${width}`,
    transition: { duration: ANIMATION_DURATION },
  }),
};

export const mobileFormsContainerVariants: Variants = {
  initial: ({ width, initialForm }) => {
    if (initialForm === "signin")
      return {
        x: 0,
      };
    return {
      x: `-${width}`,
    };
  },
  signin: {
    x: 0,
    transition: { duration: 0, delay: ANIMATION_DURATION / 2 },
  },
  signup: ({ width }) => ({
    x: `-${width}`,
    transition: { duration: 0, delay: ANIMATION_DURATION / 2 },
  }),
};

export const signInVariants: Variants = {
  initial: (initialForm: FormType) => {
    if (initialForm === "signin")
      return {
        x: 0,
      };
    return {
      x: "100%",
    };
  },
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
  initial: (initialForm: FormType) => {
    if (initialForm === "signin")
      return {
        x: "-100%",
      };
    return {
      x: 0,
    };
  },
  signin: {
    x: "-100%",
    transition: { duration: ANIMATION_DURATION },
  },
  signup: {
    x: 0,
    transition: { duration: ANIMATION_DURATION },
  },
};
