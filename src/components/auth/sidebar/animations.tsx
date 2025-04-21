import { Transition, Variants } from "motion/react";
import { ANIMATION_DURATION } from "../animations";
import { FormType } from "../Auth";
import { easeInOut } from "motion";

export const transitionConfig: Transition = {
  duration: ANIMATION_DURATION,
  ease: [0.39, 0.24, 0.3, 1],
  times: [0.1, 0.75, 1],
};

export const desktopMaskVariants: Variants = {
  initial: ({ initialForm, maskWidthPercentage }) => {
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
  signin: ({ maskWidthPercentage }) => ({
    clipPath: [
      `polygon(0% 0%, ${maskWidthPercentage + 15}% 0%, ${maskWidthPercentage + 15}% 100%, 0% 100%)`,
      `polygon(${
        100 - maskWidthPercentage - 15
      }% 0%, 100% 0%, 100% 100%, ${100 - maskWidthPercentage - 15}% 100%)`,
      `polygon(${
        100 - maskWidthPercentage
      }% 0%, 100% 0%, 100% 100%, ${100 - maskWidthPercentage}% 100%)`,
    ],
  }),
  signup: ({ maskWidthPercentage }) => ({
    clipPath: [
      `polygon(${
        100 - maskWidthPercentage - 15
      }% 0%, 100% 0%, 100% 100%, ${100 - maskWidthPercentage - 15}% 100%)`,
      `polygon(0% 0%, ${maskWidthPercentage + 15}% 0%, ${maskWidthPercentage + 15}% 100%, 0% 100%)`,
      `polygon(0% 0%, ${maskWidthPercentage}% 0%, ${maskWidthPercentage}% 100%, 0% 100%)`,
    ],
  }),
};

export const mobileMaskVariants: Variants = {
  initial: (initialForm: FormType) => {
    if (initialForm === "signin")
      return {
        clipPath: `polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)`,
      };
    return {
      clipPath: `polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)`,
    };
  },
  signin: {
    clipPath: [
      `polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)`,
      `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
      `polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)`,
    ],
    transition: {
      duration: ANIMATION_DURATION,
      ease: easeInOut,
    },
  },
  signup: {
    clipPath: [
      `polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)`,
      `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
      `polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)`,
    ],
    transition: {
      duration: ANIMATION_DURATION,
      ease: easeInOut,
    },
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
      duration: ANIMATION_DURATION - 0.15,
    },
  },
  signup: {
    right: `${(2 / 3) * 100}%`,
    transition: {
      ...transitionConfig,
      duration: ANIMATION_DURATION - 0.15,
    },
  },
};

export const sidebarBtnVariants: Variants = {
  signin: {
    scaleX: [1, 1.4, 1],
    transition: { duration: ANIMATION_DURATION - 0.4, times: [0, 0.5, 1] },
  },
  signup: {
    scaleX: [1, 1.41, 1],
    transition: { duration: ANIMATION_DURATION - 0.4, times: [0, 0.5, 1] },
  },
};

export const sidebarBtnTextsVariants: Variants = {
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
  initial: ({ initialForm, isDesktop }) => {
    if (initialForm === "signin")
      return {
        x: isDesktop ? 0 : "-14%",
      };
    return {
      x: isDesktop ? "-14%" : 0,
    };
  },
  signin: ({ isDesktop }) => ({
    x: isDesktop ? 0 : "-14%",
    transition: { duration: ANIMATION_DURATION + 0.1, ease: "easeInOut" },
  }),
  signup: ({ isDesktop }) => ({
    x: isDesktop ? "-14%" : 0,
    transition: { duration: ANIMATION_DURATION + 0.1, ease: "easeInOut" },
  }),
};
