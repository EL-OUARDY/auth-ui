import { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import { motion } from "motion/react";
import { anim } from "@/lib/utils";
import {
  formsContainerVariants,
  signInVariants,
  signUpVariants,
} from "./animations";
import SignUp from "./signup/SignUp";
import SignIn from "./signin/SignIn";

export type FormType = "signin" | "signup" | "";

function Auth() {
  const [activeForm, setActiveForm] = useState<FormType>("");

  return (
    <div className="page-wrapper bg-background text-foreground selection:bg-primary-background flex h-screen items-center justify-center font-sans select-none selection:text-white">
      <div className="relative h-148 w-216 overflow-hidden shadow-md">
        {/* Sidebar - animated overlay */}
        <Sidebar activeForm={activeForm} setActiveForm={setActiveForm} />

        {/* Forms */}
        <motion.div
          {...anim(activeForm, formsContainerVariants)}
          className="absolute flex h-full w-fit"
        >
          {/* Sign in */}
          <div className="flex w-144 items-center justify-center overflow-hidden bg-white">
            <motion.div
              {...anim(activeForm, signInVariants)}
              className="flex w-full items-center justify-center px-8"
            >
              <div className="w-88">
                <SignIn />
              </div>
            </motion.div>
          </div>

          {/* Sign up */}
          <div className="flex w-144 items-center justify-center overflow-hidden bg-white">
            <motion.div
              {...anim(activeForm, signUpVariants)}
              className="flex w-full items-center justify-center px-8"
            >
              <div className="w-88">
                <SignUp />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Auth;
