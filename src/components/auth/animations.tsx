import { Variants } from "motion/react";
import { FormType } from "./Auth";

export const ANIMATION_DURATION = 1.2;

export const formsContainerVariants: Variants = {
  initial: (initialForm: FormType) => {
    if (initialForm === "signin")
      return {
        x: 0,
      };
    return {
      x: "-18rem",
    };
  },
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
