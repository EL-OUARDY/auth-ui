import { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import { motion } from "motion/react";
import { anim } from "@/lib/utils";
import {
  formsContainerVariants,
  mobileFormsContainerVariants,
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
 * A responsive authentication component that provides a smooth sliding animation
 * between Sign In and Sign Up forms. Features a sidebar overlay for desktop views
 * and a full-width layout for mobile devices.
 *
 * @component
 *
 * @example
 * return (
 *   <Auth initialForm="signin" />
 * )
 *
 * @param {Object} props
 * @param {("signin"|"signup")} [props.initialForm="signin"] - Initial form to display on component mount
 * @returns {JSX.Element} Authentication interface with animated form transitions
 */
function Auth({ initialForm = "signin" }: Props) {
  const [activeForm, setActiveForm] = useState<FormType>("");
  const isDesktop = useMediaQuery("(min-width: 1024px)", true);

  return (
    <div className="page-wrapper lg:bg-background text-foreground selection:bg-primary-background flex h-screen items-center justify-center bg-white font-sans select-none selection:text-white lg:p-0">
      <div className="relative h-screen w-full overflow-hidden lg:h-148 lg:w-216 lg:shadow-md">
        {/* Sidebar - animated overlay */}
        <Sidebar
          initialForm={initialForm}
          activeForm={activeForm}
          setActiveForm={setActiveForm}
        />

        {/* Forms */}
        <motion.div
          {...anim(
            activeForm,
            isDesktop ? formsContainerVariants : mobileFormsContainerVariants,
            {
              initialForm,
              width: isDesktop ? "18rem" : "100%",
              isDesktop,
            },
          )}
          className="absolute flex h-full w-full lg:w-fit"
        >
          {/* Sign in */}
          <div className="flex w-full flex-shrink-0 items-center justify-center overflow-hidden bg-white p-4 lg:w-144">
            <motion.div
              {...anim(
                activeForm,
                isDesktop ? signInVariants : {},
                initialForm,
              )}
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
              {...anim(
                activeForm,
                isDesktop ? signUpVariants : {},
                initialForm,
              )}
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
