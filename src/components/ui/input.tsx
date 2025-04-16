import { cn } from "@/lib/utils";
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
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
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
          className={cn(
            "ring-ring/20 text-md from-accent to-secondary flex h-10 w-full rounded-md bg-gradient-to-r p-2 px-3 py-2 focus-visible:ring-1 focus-visible:ring-offset-2 focus-visible:outline-none",
            icon && "pl-8",
            className,
          )}
          type={
            isPasswordInput
              ? isPasswordVisible
                ? "text"
                : "password"
              : props["type"]
          }
        />

        {isPasswordInput && (
          <div
            onClick={() => setIsPasswordVisible((v) => !v)}
            className="text-muted-foreground/50 bg-secondary absolute top-0 right-1 flex h-full w-8 cursor-pointer items-center justify-center"
          >
            {isPasswordVisible ? (
              <EyeOffIcon className="size-4" />
            ) : (
              <EyeIcon className="size-4" />
            )}
          </div>
        )}
      </div>
    );
  },
);

export default Input;
