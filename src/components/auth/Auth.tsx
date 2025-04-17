import { useEffect, useRef, useState } from "react";
import Button from "../ui/button";
import SignIn from "./signin/SignIn";
import SignInPrompt from "./signin/SignInPrompt";
import SignUp from "./signup/SignUp";
import SignUpPrompt from "./signup/SignUpPrompt";
import {
  containerVariants,
  propmtBtnVariants,
  sidePanelVariants,
} from "./animations";
import { anim } from "@/lib/utils";
import { motion } from "motion/react";

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
        <motion.div
          {...anim(activeForm, containerVariants)}
          className="absolute flex h-full w-fit"
        >
          {/* Sign in */}
          <div className="flex w-144 items-center justify-center bg-white px-8">
            <SignIn className="z-99 w-xs" />
          </div>

          {/* Prompt panel */}
          <motion.div
            key={activeForm}
            layout
            ref={sidePanelRef}
            {...anim(activeForm, sidePanelVariants, sidePanelWidth)}
            className="relative z-100 mt-46 flex w-72 flex-col items-center justify-center"
          >
            <Button
              className="relative w-2/5 overflow-hidden p-0 uppercase"
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
                className="absolute left-0 flex w-full"
              >
                <div className="min-w-full">Sign up</div>
                <div className="min-w-full">Sign in</div>
              </motion.div>
            </Button>
          </motion.div>

          {/* Sign up */}
          <div className="flex w-144 items-center justify-center bg-white px-8">
            <SignUp className="z-99 w-xs" />
          </div>
        </motion.div>

        {/* Side panel texts */}
        <div className="absolute left-0 flex h-full w-1/3 items-center px-8">
          <SignInPrompt />
        </div>
        <div className="absolute right-0 flex h-full w-1/3 items-center px-8">
          <SignUpPrompt />
        </div>
      </div>
    </div>
  );
}

export default Auth;
