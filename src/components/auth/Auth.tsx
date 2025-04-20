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
import useMediaQuery from "@/hooks/useMediaQuery";

export type FormType = "signin" | "signup" | "";

interface Props {
  initialForm?: "signin" | "signup";
}

/**
 * Authentication component that provides a sliding
 * interface between Sign In and Sign Up forms
 *
 * @component
 *
 * @example
 * return (
 *   <Auth initialForm="signin" />
 * )
 *
 * @param {("signin"|"signup")} [props.initialForm="signin"] - The initial form to display when the component is rendered.
 * @returns {JSX.Element}
 */
function Auth({ initialForm = "signin" }: Props) {
  const [activeForm, setActiveForm] = useState<FormType>("");
  const isDesktop = useMediaQuery("(min-width: 1024px)", true);

  return (
    <div className="page-wrapper lg:bg-background text-foreground selection:bg-primary-background flex h-screen items-center justify-center bg-white font-sans select-none selection:text-white lg:p-0">
      <div className="relative h-screen w-full overflow-hidden lg:h-148 lg:w-216 lg:shadow-md">
        <button
          className="absolute top-4 right-4 z-1000 text-4xl italic"
          onClick={() => {
            setActiveForm(
              (activeForm || initialForm) === "signin" ? "signup" : "signin",
            );
          }}
        >
          {activeForm || "Click"}
        </button>
        <label className="absolute top-4 left-4 z-1000 text-4xl italic">
          {isDesktop ? "YES" : "NO"}
        </label>
        {/* Sidebar - animated overlay */}
        <Sidebar
          initialForm={initialForm}
          activeForm={activeForm}
          setActiveForm={setActiveForm}
        />

        {/* Forms */}
        <motion.div
          {...anim(activeForm, formsContainerVariants, {
            initialForm,
            width: isDesktop ? "18rem" : "100%",
          })}
          className="absolute flex h-full w-full lg:w-fit"
        >
          {/* Sign in */}
          <div className="flex w-full flex-shrink-0 items-center justify-center overflow-hidden bg-white p-4 lg:w-144">
            <motion.div
              {...anim(activeForm, signInVariants, initialForm)}
              className="flex w-full items-center justify-center lg:px-8"
            >
              <div className="w-full max-w-sm lg:w-88">
                <SignIn />
              </div>
            </motion.div>
          </div>

          {/* Sign up */}
          <div className="flex w-full flex-shrink-0 items-center justify-center overflow-hidden bg-white p-4 lg:w-144">
            <motion.div
              {...anim(activeForm, signUpVariants, initialForm)}
              className="flex w-full items-center justify-center lg:px-8"
            >
              <div className="w-full max-w-sm lg:w-88">
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
