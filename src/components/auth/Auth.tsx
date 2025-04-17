import { useEffect, useRef, useState } from "react";
import Button from "../ui/button";
import SignIn from "./signin/SignIn";
import SignInPrompt from "./signin/SignInPrompt";
import SignUp from "./signup/SignUp";
import SignUpPrompt from "./signup/SignUpPrompt";
import {
  bgShapesVariants,
  containerVariants,
  propmtBtnVariants,
  sidePanelVariants,
  signInVariants,
  signUpVariants,
} from "./animations";
import { anim } from "@/lib/utils";
import { motion } from "motion/react";
import BagShape from "@/assets/img/shapes/bag.svg";
import BagsShape from "@/assets/img/shapes/bags.svg";
import phoneShape from "@/assets/img/shapes/phone.svg";
import hatShape from "@/assets/img/shapes/hat.svg";
import shirtShape from "@/assets/img/shapes/shirt.svg";

type FormType = "signin" | "signup" | "";

function Auth() {
  const [activeForm, setActiveForm] = useState<FormType>("");
  const [sidePanelWidth, setSidePanelWidth] = useState<number>(0);
  const sidePanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sidePanelRef.current) {
      setSidePanelWidth(sidePanelRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="page-wrapper flex h-screen items-center justify-center font-sans select-none">
      <div className="bg-primary-background/70 relative h-148 w-216 overflow-hidden shadow-md">
        {/* Side panel texts */}
        <div className="absolute left-0 z-2 flex h-full w-1/3 items-center px-6">
          <SignInPrompt />
        </div>
        <div className="absolute right-0 z-2 flex h-full w-1/3 items-center px-6">
          <SignUpPrompt />
        </div>

        <motion.div
          {...anim(activeForm, containerVariants)}
          className="absolute z-3 flex h-full w-fit"
        >
          {/* Sign in */}
          <div className="flex w-144 items-center justify-center overflow-hidden bg-white">
            <motion.div
              {...anim(activeForm, signInVariants)}
              className="flex w-full items-center justify-center px-8"
            >
              <div className="z-99 w-xs">
                <SignIn />
              </div>
            </motion.div>
          </div>

          {/* Prompt panel */}
          <motion.div
            ref={sidePanelRef}
            {...anim(activeForm, sidePanelVariants, sidePanelWidth)}
            className="relative z-101 mt-36 flex w-72 flex-col items-center justify-center"
          >
            <Button
              className="w-2/5 overflow-hidden p-0 uppercase"
              variant="outline"
              onClick={() =>
                setActiveForm(
                  activeForm === "signin" || activeForm === ""
                    ? "signup"
                    : "signin",
                )
              }
            >
              <motion.div
                {...anim(activeForm, propmtBtnVariants)}
                className="flex w-full"
              >
                <div className="min-w-full">Sign up</div>
                <div className="min-w-full">Sign in</div>
              </motion.div>
            </Button>
          </motion.div>

          {/* Sign up */}
          <div className="flex w-144 items-center justify-center overflow-hidden bg-white">
            <motion.div
              {...anim(activeForm, signUpVariants)}
              className="flex w-full items-center justify-center px-8"
            >
              <div className="z-99 w-xs">
                <SignUp />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Shapes */}
        <motion.div
          {...anim(activeForm, bgShapesVariants)}
          className="bg-shapes relative z-1 size-full"
        >
          <img
            src={BagShape}
            className="absolute -top-8 -right-28 size-68 -rotate-[31deg]"
          />
          <img
            src={BagsShape}
            className="absolute top-2 left-76 size-28 rotate-[23deg]"
          />
          <img
            src={phoneShape}
            className="absolute top-22 left-124 size-32 rotate-[42deg]"
          />
          <img
            src={hatShape}
            className="absolute top-80 left-118 size-16 -rotate-[31deg] opacity-60"
          />
          <img
            src={shirtShape}
            className="absolute top-110 left-56 size-32 -rotate-[31deg]"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Auth;
