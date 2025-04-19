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
  maskVariants,
  propmtBtnVariants,
  transitionConfig,
} from "./animations";
import { FormType } from "../Auth";
import Button from "@/components/ui/button";

interface Props {
  activeForm: FormType;
  setActiveForm: Dispatch<React.SetStateAction<FormType>>;
}

function Sidebar({ activeForm, setActiveForm }: Props) {
  const [isTransDone, setIsTransDone] = useState<boolean>(true);

  return (
    <div className="sidebar">
      {/* Button container */}
      <motion.div
        {...anim(activeForm, btnContainerVariants)}
        transition={transitionConfig}
        className="absolute flex h-full w-72 flex-col items-center justify-center"
      >
        <Button
          className="z-101 mt-34 w-2/5 overflow-hidden p-0 uppercase"
          variant="outline"
          onClick={() => {
            if (!isTransDone) return;
            setActiveForm(
              activeForm === "signin" || activeForm === ""
                ? "signup"
                : "signin",
            );
          }}
        >
          <motion.div
            {...anim(activeForm, propmtBtnVariants)}
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
        {...anim(activeForm, maskVariants)}
        transition={transitionConfig}
        className="bg-background absolute inset-0 z-100"
      >
        {/* Panel texts */}
        <div className="absolute left-0 z-2 flex h-full w-1/3 items-center px-8">
          <SignInPrompt />
        </div>
        <div className="absolute right-0 z-2 flex h-full w-1/3 items-center px-8">
          <SignUpPrompt />
        </div>

        {/* Shapes */}
        <motion.div
          {...anim(activeForm, bgShapesVariants)}
          className="bg-shapes relative z-1 size-full"
        >
          <img
            src={BagShape}
            className="absolute -top-6 -right-16 size-42 -rotate-[31deg]"
          />
          <img
            src={BagsShape}
            className="absolute top-2 left-76 size-24 rotate-[23deg]"
          />
          <img
            src={phoneShape}
            className="absolute top-26 left-124 size-30 rotate-[42deg]"
          />
          <img
            src={hatShape}
            className="absolute top-72 left-110 size-16 -rotate-[31deg] opacity-40"
          />
          <img
            src={shirtShape}
            className="absolute top-106 left-58 size-32 -rotate-[31deg]"
          />
        </motion.div>

        {/* Background */}
        <div className="bg-primary-background/70 pointer-events-none absolute top-0 left-0 -z-1 size-full"></div>
      </motion.div>
    </div>
  );
}

export default Sidebar;
