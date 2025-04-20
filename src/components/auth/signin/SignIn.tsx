import { Checkbox } from "../../ui/checkbox";
import Input from "../../ui/input";
import Button from "../../ui/button";
import EnvelopeIcon from "../../icons/envelope";
import PasswordIcon from "../../icons/password";
import { anim, cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "motion/react";
import ArrowLeftIcon from "../../icons/arrowLeft";
import { variants } from "./animations";
import SocialAuth from "@/components/ui/SocialAuth";

interface Props {
  className?: string;
}

type FormType = "signin" | "forgotPassword";

function SignIn({ className }: Props) {
  const [activeForm, setActiveForm] = useState<FormType>("signin");

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        {...anim(activeForm, variants)}
        className="relative flex items-center lg:gap-4 lg:p-4"
      >
        <form className="sign-in relative flex w-full flex-shrink-0 flex-col gap-4 px-4 text-center lg:min-w-full lg:px-0">
          <h2 className="text-primary text-5xl font-medium">Sign in</h2>
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
          <div className="text-muted-foreground flex items-center justify-between font-[350]">
            <div className="flex items-center gap-1 hover:underline">
              <Checkbox
                id="remember-me"
                className="mt-[1px] size-3.5 cursor-pointer shadow-none"
              />
              <label htmlFor="remember-me" className="cursor-pointer">
                Remember Me
              </label>
            </div>
            <div
              onClick={() => {
                setActiveForm(
                  activeForm === "signin" ? "forgotPassword" : "signin",
                );
              }}
              className="cursor-pointer hover:underline"
            >
              Forgot your password?
            </div>
          </div>
          <div className="text-center">
            <Button className="px-8 font-medium uppercase">login</Button>
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
                setActiveForm(
                  activeForm === "signin" ? "forgotPassword" : "signin",
                );
              }}
              className="cursor-pointer font-medium"
              type="button"
            >
              <ArrowLeftIcon className="text-muted-foreground/30 hover:text-muted-foreground/50 size-7" />
            </button>
            <h2 className="text-primary text-3xl font-medium">
              Forgot Your Password?
            </h2>
          </div>
          <div className="text-muted-foreground text-lg">
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
            <Button className="px-6 font-medium uppercase">Submit</Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default SignIn;
