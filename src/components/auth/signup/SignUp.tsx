import { cn } from "@/lib/utils";
import Input from "@/components/ui/input";
import FacebookIcon from "@/components/icons/facebook";
import GoogleIcon from "@/components/icons/google";
import XIcon from "@/components/icons/x";
import AppleIcon from "@/components/icons/apple";
import EnvelopeIcon from "@/components/icons/envelope";
import PasswordIcon from "@/components/icons/password";
import Button from "@/components/ui/button";
import UserIcon from "@/components/icons/user";
import { Checkbox } from "@/components/ui/checkbox";

interface Props {
  className?: string;
}

function SignUp({ className }: Props) {
  return (
    <form
      className={cn("sign-up flex flex-col gap-4 px-4 text-center", className)}
    >
      <h2 className="text-primary text-5xl font-medium">Sign up</h2>
      <div className="social-login text-muted-foreground flex justify-center gap-4 text-center">
        <FacebookIcon className="hover:text-foreground size-8 cursor-pointer rounded-full border p-1" />
        <GoogleIcon className="hover:text-foreground size-8 cursor-pointer rounded-full border p-1" />
        <XIcon className="hover:text-foreground size-8 cursor-pointer rounded-full border p-1" />
        <AppleIcon className="hover:text-foreground size-8 cursor-pointer rounded-full border p-1" />
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
      <div className="text-muted-foreground flex items-center justify-center gap-1">
        <Checkbox
          id="privacy-policy"
          className="mt-[1px] size-3.5 cursor-pointer shadow-none"
        />
        <label htmlFor="privacy-policy" className="cursor-pointer">
          I agree to the{" "}
          <a className="hover:text-primary hover:underline" href="">
            Terms
          </a>{" "}
          &{" "}
          <a className="hover:text-primary hover:underline" href="">
            Privacy Policy
          </a>
          .
        </label>
      </div>

      <div className="text-center">
        <Button className="px-8 uppercase">Sign up</Button>
      </div>
    </form>
  );
}

export default SignUp;
