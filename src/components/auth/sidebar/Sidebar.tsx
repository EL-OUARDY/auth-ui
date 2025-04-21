import { Dispatch, useState } from "react";
import { motion } from "motion/react";
import { anim } from "@/lib/utils";
import SignInPrompt from "../signin/SignInPrompt";
import SignUpPrompt from "../signup/SignUpPrompt";
import BagShape from "@/assets/img/shapes/bag.svg";
import BagsShape from "@/assets/img/shapes/bags.svg";
import phoneShape from "@/assets/img/shapes/phone.svg";
import hatShape from "@/assets/img/shapes/hat.svg";
import shirtShape from "@/assets/img/shapes/shirt.svg";
import {
  bgShapesVariants,
  btnContainerVariants,
  desktopMaskVariants,
  mobileMaskVariants,
  propmtBtnVariants,
  transitionConfig,
} from "./animations";
import { FormType } from "../Auth";
import Button from "@/components/ui/button";
import useMediaQuery from "@/hooks/useMediaQuery";

interface Props {
  initialForm: "signin" | "signup";
  activeForm: FormType;
  setActiveForm: Dispatch<React.SetStateAction<FormType>>;
}

function Sidebar({ initialForm, activeForm, setActiveForm }: Props) {
  const [isTransDone, setIsTransDone] = useState<boolean>(true);
  const isDesktop = useMediaQuery("(min-width: 1024px)", true);

  return (
    <div className="sidebar">
      {/* Button container */}
      <motion.div
        {...anim(activeForm, btnContainerVariants, initialForm)}
        transition={transitionConfig}
        className="absolute hidden h-full w-72 flex-col items-center justify-center lg:flex"
      >
        <Button
          className="z-101 mt-34 w-2/5 overflow-hidden p-0 font-medium uppercase"
          variant="outline"
          onClick={() => {
            if (!isTransDone) return;
            setActiveForm(
              (activeForm || initialForm) === "signin" ? "signup" : "signin",
            );
          }}
          aria-label={activeForm || initialForm}
        >
          {/* Button texts */}
          <motion.div
            {...anim(activeForm, propmtBtnVariants, initialForm)}
            onAnimationStart={() => setIsTransDone(false)}
            onAnimationComplete={() => setIsTransDone(true)}
            className="flex w-full"
          >
            <div className="min-w-full">Sign up</div>
            <div className="min-w-full">Sign in</div>
          </motion.div>
        </Button>
      </motion.div>

      {/* Mask  */}
      <motion.div
        {...anim(
          activeForm,
          isDesktop ? desktopMaskVariants : mobileMaskVariants,
          {
            initialForm,
            maskWidthPercentage: (1 / 3) * 100,
          },
        )}
        transition={transitionConfig}
        className="bg-background absolute inset-0 z-100"
      >
        {/* Sidebar texts */}
        <div className="absolute left-0 z-2 hidden h-full w-1/3 items-center px-8 lg:flex">
          <SignInPrompt />
        </div>
        <div className="absolute right-0 z-2 hidden h-full w-1/3 items-center px-8 lg:flex">
          <SignUpPrompt />
        </div>

        {/* Shapes */}
        <motion.div
          {...anim(activeForm, bgShapesVariants, { initialForm, isDesktop })}
          className="bg-shapes relative z-1 size-full"
        >
          <img
            src={BagShape}
            className="absolute -top-5 -right-16 size-42 -rotate-[31deg]"
            alt="background bag shape"
          />
          <img
            src={BagsShape}
            className="absolute top-40 left-30 size-20 rotate-[23deg] lg:top-2 lg:left-76 lg:size-24"
            alt="background bags shape"
          />
          <img
            src={phoneShape}
            className="absolute top-24 left-132 hidden size-30 rotate-[42deg] md:block lg:left-122"
            alt="background phone shape"
          />
          <img
            src={hatShape}
            className="absolute top-72 left-186 size-16 -rotate-[31deg] opacity-40 lg:left-110"
            alt="background hat shape"
          />
          <img
            src={shirtShape}
            className="absolute top-106 left-58 size-32 -rotate-[31deg]"
            alt="background shirt shape"
          />
        </motion.div>

        {/* Background */}
        <div className="bg-primary-background/70 pointer-events-none absolute top-0 left-0 -z-1 size-full"></div>
      </motion.div>
    </div>
  );
}

export default Sidebar;
