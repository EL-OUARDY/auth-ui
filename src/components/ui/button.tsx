import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ButtonHTMLAttributes, ReactElement, forwardRef } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactElement | ReactElement[] | string;
  variant?: "default" | "outline";
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, children, variant = "default", ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cn(
          "bg-primary group text-primary-foreground relative inline-flex h-10 w-fit cursor-pointer items-center justify-center overflow-hidden px-8 py-2 text-lg whitespace-nowrap transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          variant === "outline" &&
            "hover:text-primary border-2 border-white bg-transparent hover:bg-white",
          variant === "default" && "transition-all duration-300 ease-out",
          className,
        )}
      >
        {variant === "default" && (
          <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40"></span>
        )}
        {children}
      </button>
    );
  },
);

// Create a motion version of the Button component
export const MotionButton = motion(Button);

export default Button;
