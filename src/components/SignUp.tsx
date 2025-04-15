import clsx from "clsx";
import { Checkbox } from "./ui/checkbox";
import Input from "./ui/input";
import GoogleIcon from "./icons/google";
import FacebookIcon from "./icons/facebook";
import XIcon from "./icons/x";
import AppleIcon from "./icons/apple";
import Button from "./ui/button";
import EnvelopeIcon from "./icons/envelope";
import PasswordIcon from "./icons/password";
import UserIcon from "./icons/user";

interface Props {
  className?: string;
}

function SignUp({ className }: Props) {
  return (
    <div className={clsx("sign-up flex flex-col gap-4 text-center", className)}>
      <h2 className="text-primary text-5xl">Create Account</h2>
      <div className="social-login text-muted-foreground flex justify-center gap-4 text-center">
        <FacebookIcon className="hover:text-foreground size-8 cursor-pointer rounded-full border p-1" />
        <GoogleIcon className="hover:text-foreground size-8 cursor-pointer rounded-full border p-1" />
        <XIcon className="hover:text-foreground size-8 cursor-pointer rounded-full border p-1" />
        <AppleIcon className="hover:text-foreground size-8 cursor-pointer rounded-full border p-1" />
      </div>
      <div className="flex flex-col gap-2">
        <Input
          type="text"
          placeholder="Name"
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
      <div className="text-muted-foreground flex items-center gap-1">
        <Checkbox id="privacy-policy" className="size-3.5 cursor-pointer" />
        <label htmlFor="privacy-policy" className="cursor-pointer">
          I agree to the{" "}
          <a className="hover:text-primary hover:underline" href="">
            Terms and Conditions
          </a>{" "}
          &{" "}
          <a className="hover:text-primary hover:underline" href="">
            Privacy Policy
          </a>
          .
        </label>
      </div>
      <div className="text-center">
        <Button className="px-6">Sign up</Button>
      </div>
    </div>
  );
}

export default SignUp;
