import { useState } from "react";
import Button from "../ui/button";
import SignIn from "./signin/SignIn";
import SignInPrompt from "./signin/SignInPrompt";
import SignUp from "./signup/SignUp";
import SignUpPrompt from "./signup/SignUpPrompt";
import { containerVariants, propmtBtnVariants } from "./animations";
import { anim } from "@/lib/utils";
import { motion } from "motion/react";

type FormType = "signin" | "signup";

function Auth() {
  const [activeForm, setActiveForm] = useState<FormType>("signin");

  return (
    <div className="page-wrapper flex h-screen items-center justify-center font-sans select-none">
      <div className="bg-primary-background/70 relative h-148 w-4xl overflow-hidden shadow-md">
        <motion.div
          {...anim(activeForm, containerVariants)}
          className="absolute flex h-full w-full"
        >
          {/* Sign in */}
          <div className="flex min-w-2/3 items-center justify-center bg-white px-8">
            <SignIn className="z-99 w-xs" />
          </div>

          {/* Prompt panel */}
          <div className="relative z-100 mt-46 flex min-w-1/3 flex-col items-center justify-center">
            <Button
              className="relative w-32 overflow-hidden p-0 uppercase"
              variant="outline"
              onClick={() =>
                setActiveForm(activeForm === "signin" ? "signup" : "signin")
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
          </div>

          {/* Sign up */}
          <div className="flex min-w-2/3 items-center justify-center bg-white px-8">
            <SignUp className="z-99 w-xs" />
          </div>
        </motion.div>

        {/* Side panel texts */}
        {/* {activeForm === "signin" ? <SignUpPrompt /> : <SignInPrompt />} */}
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
