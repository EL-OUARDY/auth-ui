import { Transition, Variants } from "motion/react";
import { ANIMATION_DURATION } from "../animations";
import { FormType } from "../Auth";

const maskWidthPercentage = (1 / 3) * 100;

export const transitionConfig: Transition = {
  duration: ANIMATION_DURATION,
  ease: [0.39, 0.24, 0.3, 1],
  times: [0.1, 0.75, 1],
};

export const maskVariants: Variants = {
  initial: (initialForm: FormType) => {
    if (initialForm === "signin")
      return {
        clipPath: `polygon(${
          100 - maskWidthPercentage
        }% 0%, 100% 0%, 100% 100%, ${100 - maskWidthPercentage}% 100%)`,
      };
    return {
      clipPath: `polygon(0% 0%, ${maskWidthPercentage}% 0%, ${maskWidthPercentage}% 100%, 0% 100%)`,
    };
  },
  signin: {
    clipPath: [
      `polygon(0% 0%, ${maskWidthPercentage + 15}% 0%, ${maskWidthPercentage + 15}% 100%, 0% 100%)`,
      `polygon(${
        100 - maskWidthPercentage - 15
      }% 0%, 100% 0%, 100% 100%, ${100 - maskWidthPercentage - 15}% 100%)`,
      `polygon(${
        100 - maskWidthPercentage
      }% 0%, 100% 0%, 100% 100%, ${100 - maskWidthPercentage}% 100%)`,
    ],
  },
  signup: {
    clipPath: [
      `polygon(${
        100 - maskWidthPercentage - 15
      }% 0%, 100% 0%, 100% 100%, ${100 - maskWidthPercentage - 15}% 100%)`,
      `polygon(0% 0%, ${maskWidthPercentage + 15}% 0%, ${maskWidthPercentage + 15}% 100%, 0% 100%)`,
      `polygon(0% 0%, ${maskWidthPercentage}% 0%, ${maskWidthPercentage}% 100%, 0% 100%)`,
    ],
  },
};

export const btnContainerVariants: Variants = {
  initial: (initialForm: FormType) => {
    if (initialForm === "signin")
      return {
        right: 0,
      };
    return {
      right: `${(2 / 3) * 100}%`,
    };
  },
  signin: {
    right: 0,
    transition: {
      ...transitionConfig,
      duration: ANIMATION_DURATION - 0.1,
    },
  },
  signup: {
    right: `${(2 / 3) * 100}%`,
    transition: {
      ...transitionConfig,
      duration: ANIMATION_DURATION - 0.1,
    },
  },
};

export const propmtBtnVariants: Variants = {
  initial: (initialForm: FormType) => {
    if (initialForm === "signin")
      return {
        x: 0,
      };
    return {
      x: "-100%",
    };
  },
  signin: {
    x: 0,
    transition: { duration: ANIMATION_DURATION },
  },
  signup: {
    x: "-100%",
    transition: { duration: ANIMATION_DURATION },
  },
};

export const bgShapesVariants: Variants = {
  initial: (initialForm: FormType) => {
    if (initialForm === "signin")
      return {
        x: 0,
      };
    return {
      x: "-14%",
    };
  },
  signin: {
    x: 0,
    transition: { duration: ANIMATION_DURATION + 0.1, ease: "easeInOut" },
  },
  signup: {
    x: "-14%",
    transition: { duration: ANIMATION_DURATION + 0.1, ease: "easeInOut" },
  },
};
