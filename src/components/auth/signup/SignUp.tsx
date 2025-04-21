import { cn } from "@/lib/utils";
import Input from "@/components/ui/input";
import EnvelopeIcon from "@/components/icons/envelope";
import PasswordIcon from "@/components/icons/password";
import Button from "@/components/ui/button";
import UserIcon from "@/components/icons/user";
import { Checkbox } from "@/components/ui/checkbox";
import SocialAuth from "@/components/ui/SocialAuth";
import { Dispatch } from "react";
import { FormType } from "../Auth";

interface Props {
  className?: string;
  setActiveForm: Dispatch<React.SetStateAction<FormType>>;
}

function SignUp({ className, setActiveForm }: Props) {
  return (
    <form
      className={cn("sign-up flex flex-col gap-4 px-4 text-center", className)}
    >
      <h2 className="text-primary text-5xl font-medium tracking-tighter">
        Sign up
      </h2>
      <div className="social-login text-muted-foreground flex justify-center gap-4 text-center">
        <SocialAuth />
      </div>
      <div className="flex flex-col gap-2 text-lg">
        <Input
          type="text"
          placeholder="Name"
          className="capitalize"
          icon={<UserIcon className="size-5" />}
        />
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
      <div className="text-muted-foreground flex items-center justify-center gap-1 text-sm">
        <Checkbox
          id="privacy-policy"
          className="-mt-1 size-3.5 cursor-pointer shadow-none"
        />
        <label htmlFor="privacy-policy" className="cursor-pointer">
          I agree to the{" "}
          <a className="hover:text-primary hover:underline" href="">
            Terms of Service
          </a>{" "}
          &{" "}
          <a className="hover:text-primary hover:underline" href="">
            Privacy Policy
          </a>
          .
        </label>
      </div>

      <div className="text-center">
        <Button aria-label="Sign up" className="px-8 font-medium uppercase">
          Sign up
        </Button>
      </div>

      {/* Sign up prompt */}
      <div className="after:border-border relative mt-4 mb-2 text-center text-base after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t lg:hidden">
        <span className="bg-background text-muted-foreground relative z-10 rounded-md p-2 px-4">
          Already have an account?{" "}
          <button
            onClick={(e) => {
              e.preventDefault();
              setActiveForm("signin");
            }}
            className="text-primary cursor-pointer font-semibold"
            aria-label="Sign in"
          >
            Sign in
          </button>
        </span>
      </div>
    </form>
  );
}

export default SignUp;
