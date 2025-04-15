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

interface Props {
  className?: string;
}

function SignIn({ className }: Props) {
  return (
    <div className={clsx("sign-in flex flex-col gap-4 text-center", className)}>
      <h2 className="text-primary text-5xl">Sign in</h2>
      <div className="social-login text-muted-foreground flex justify-center gap-4 text-center">
        <FacebookIcon className="hover:text-foreground size-8 cursor-pointer rounded-full border p-1" />
        <GoogleIcon className="hover:text-foreground size-8 cursor-pointer rounded-full border p-1" />
        <XIcon className="hover:text-foreground size-8 cursor-pointer rounded-full border p-1" />
        <AppleIcon className="hover:text-foreground size-8 cursor-pointer rounded-full border p-1" />
      </div>
      <div className="flex flex-col gap-2">
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
        <div className="cursor-pointer hover:underline">
          Forgot your password?
        </div>
      </div>
      <div className="text-center">
        <Button className="px-6">LOGIN</Button>
      </div>
    </div>
  );
}

export default SignIn;
