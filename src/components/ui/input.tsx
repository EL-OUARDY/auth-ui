import clsx from "clsx";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import {
  InputHTMLAttributes,
  forwardRef,
  useId,
  ReactElement,
  useState,
} from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  icon?: ReactElement;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, icon, ...props }, ref) => {
    const [pwdShown, setPwdShown] = useState(false);
    const id = useId();
    const isPasswordInput = props["type"] === "password";

    return (
      <div className="relative">
        {icon && (
          <label
            htmlFor={id}
            className="text-muted-foreground/50 absolute top-0 left-0 flex h-full w-8 cursor-text items-center justify-center"
          >
            {icon}
          </label>
        )}

        <input
          id={id}
          {...props}
          ref={ref}
          className={clsx(
            "ring-ring/20 text-md from-muted/30 to-muted flex h-10 w-full rounded-md bg-gradient-to-r p-2 px-3 py-2 focus-visible:ring-1 focus-visible:ring-offset-2 focus-visible:outline-none",
            icon && "pl-8",
            className,
          )}
          type={isPasswordInput && pwdShown ? "text" : "password"}
        />

        {isPasswordInput && (
          <div
            onClick={() => setPwdShown((v) => !v)}
            className="bg-muted text-muted-foreground/50 absolute top-0 right-1 flex h-full w-8 cursor-pointer items-center justify-center"
          >
            {pwdShown ? (
              <EyeIcon className="size-4" />
            ) : (
              <EyeOffIcon className="size-4" />
            )}
          </div>
        )}
      </div>
    );
  },
);

export default Input;
