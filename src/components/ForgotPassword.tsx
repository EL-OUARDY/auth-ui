import clsx from "clsx";
import Input from "./ui/input";
import Button from "./ui/button";
import EnvelopeIcon from "./icons/envelope";
import ArrowLeftIcon from "./icons/arrowLeft";

interface Props {
  className?: string;
}

function ForgotPassword({ className }: Props) {
  return (
    <div
      className={clsx(
        "forgot-password flex flex-col gap-4 text-center",
        className,
      )}
    >
      <div className="flex items-center justify-center space-x-2">
        <button className="cursor-pointer">
          <ArrowLeftIcon className="text-muted-foreground/30 hover:text-muted-foreground/50 size-8" />
        </button>
        <h2 className="text-primary text-3xl">Forgot Your Password?</h2>
      </div>
      <div className="">
        Don't worry! Just enter your email address below and we'll send you a
        link to reset your password.
      </div>
      <div className="flex flex-col gap-2">
        <Input
          type="email"
          placeholder="Email"
          icon={<EnvelopeIcon className="size-5" />}
        />
      </div>

      <div className="text-center">
        <Button className="px-6">Submit</Button>
      </div>
    </div>
  );
}

export default ForgotPassword;
