import { Checkbox } from "../../ui/checkbox";
import Input from "../../ui/input";
import GoogleIcon from "../../icons/google";
import FacebookIcon from "../../icons/facebook";
import XIcon from "../../icons/x";
import AppleIcon from "../../icons/apple";
import Button from "../../ui/button";
import EnvelopeIcon from "../../icons/envelope";
import PasswordIcon from "../../icons/password";
import { anim, cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "motion/react";
import ArrowLeftIcon from "../../icons/arrowLeft";
import { variants } from "./animations";

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
        className="relative flex items-center"
      >
        <form className="sign-in relative flex min-w-full flex-col gap-4 p-4 text-center">
          <h2 className="text-primary text-5xl">Sign in</h2>
          <div className="social-login text-muted-foreground flex justify-center gap-4 text-center">
            <FacebookIcon className="hover:text-foreground size-8 cursor-pointer rounded-full border p-1" />
            <GoogleIcon className="hover:text-foreground size-8 cursor-pointer rounded-full border p-1" />
            <XIcon className="hover:text-foreground size-8 cursor-pointer rounded-full border p-1" />
            <AppleIcon className="hover:text-foreground size-8 cursor-pointer rounded-full border p-1" />
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
          <div className="text-muted-foreground flex items-center justify-between">
            <div className="flex items-center gap-1 hover:underline">
              <Checkbox id="remember-me" className="size-3.5 cursor-pointer" />
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
            <Button className="px-8 uppercase">login</Button>
          </div>
        </form>

        {/* Forgot password */}
        <form
          className={cn(
            "forgot-password relative flex min-w-full flex-col gap-4 p-4 text-center",
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
              className="cursor-pointer"
              type="button"
            >
              <ArrowLeftIcon className="text-muted-foreground/30 hover:text-muted-foreground/50 size-7" />
            </button>
            <h2 className="text-primary text-3xl">Forgot Your Password?</h2>
          </div>
          <div className="">
            Don't worry! Just enter your email address below and we'll send you
            a link to reset your password.
          </div>
          <div className="flex flex-col gap-2 text-lg">
            <Input
              type="email"
              placeholder="Email"
              icon={<EnvelopeIcon className="size-5" />}
            />
          </div>

          <div className="text-center">
            <Button className="px-6">Submit</Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default SignIn;
