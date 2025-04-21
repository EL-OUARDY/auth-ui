import { Checkbox } from "../../ui/checkbox";
import Input from "../../ui/input";
import Button from "../../ui/button";
import EnvelopeIcon from "../../icons/envelope";
import PasswordIcon from "../../icons/password";
import { anim, cn } from "@/lib/utils";
import { Dispatch, useState } from "react";
import { motion } from "motion/react";
import ArrowLeftIcon from "../../icons/arrowLeft";
import { variants } from "./animations";
import SocialAuth from "@/components/ui/SocialAuth";
import { FormType } from "../Auth";

interface Props {
  className?: string;
  setActiveForm: Dispatch<React.SetStateAction<FormType>>;
}

type CurrentView = "signin" | "forgotPassword";

function SignIn({ className, setActiveForm }: Props) {
  const [currentView, setCurrentView] = useState<CurrentView>("signin");

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        {...anim(currentView, variants)}
        className="relative flex items-center lg:gap-4 lg:p-4"
      >
        <form className="sign-in relative flex w-full flex-shrink-0 flex-col gap-4 px-4 text-center lg:min-w-full lg:px-0">
          <h2 className="text-primary text-5xl font-medium tracking-tighter">
            Sign in
          </h2>
          <div className="social-login text-muted-foreground flex justify-center gap-4 text-center">
            <SocialAuth />
          </div>
          <div className="flex flex-col gap-2 text-lg">
            <Input
              type="email"
              placeholder="Email"
              icon={<EnvelopeIcon className="size-5" />}
            />
            <Input
              type="password"
              placeholder="Password"
              icon={<PasswordIcon className="size-4" />}
            />
          </div>
          <div className="text-muted-foreground flex items-center justify-between text-sm font-[350]">
            <div className="flex items-center gap-1 hover:underline">
              <Checkbox
                id="remember-me"
                className="-mt-1 size-3.5 cursor-pointer shadow-none"
              />
              <label htmlFor="remember-me" className="cursor-pointer">
                Remember Me
              </label>
            </div>
            <div
              onClick={() => {
                setCurrentView(
                  currentView === "signin" ? "forgotPassword" : "signin",
                );
              }}
              className="cursor-pointer hover:underline"
            >
              Forgot your password?
            </div>
          </div>
          <div className="text-center">
            <Button className="px-8 font-medium uppercase" aria-label="Sign in">
              Sign in
            </Button>
          </div>

          {/* Sign up prompt */}
          <div className="after:border-border relative mt-4 mb-2 text-center text-base after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t lg:hidden">
            <span className="bg-background text-muted-foreground relative z-10 rounded-md p-2 px-4">
              Don’t have an account?{" "}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setActiveForm("signup");
                }}
                className="text-primary cursor-pointer font-semibold"
                aria-label="Create Account"
              >
                Sign up
              </button>
            </span>
          </div>
        </form>

        {/* Forgot password */}
        <form
          className={cn(
            "forgot-password relative flex w-full min-w-full flex-shrink-0 flex-col gap-4 px-4 text-center lg:ml-4 lg:px-0",
            className,
          )}
        >
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={() => {
                setCurrentView(
                  currentView === "signin" ? "forgotPassword" : "signin",
                );
              }}
              className="cursor-pointer font-medium"
              type="button"
              aria-label="Go back"
            >
              <ArrowLeftIcon className="text-muted-foreground/30 hover:text-muted-foreground/50 size-7" />
            </button>
            <h2 className="text-primary text-3xl font-medium tracking-tighter">
              Forgot Your Password?
            </h2>
          </div>
          <div className="text-muted-foreground text-base">
            Don't worry! Just enter your email address below and we'll send you
            a reset link.
          </div>
          <div className="w-full text-lg">
            <Input
              type="email"
              placeholder="Email"
              icon={<EnvelopeIcon className="size-5" />}
            />
          </div>

          <div className="text-center">
            <Button className="px-6 font-medium uppercase" aria-label="Submit">
              Submit
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default SignIn;
