import { cn } from "@/lib/utils";
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
          "bg-primary text-primary-foreground hover:bg-primary/80 inline-flex h-10 w-fit cursor-pointer items-center justify-center px-8 py-2 text-lg whitespace-nowrap transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          variant === "outline" &&
            "hover:text-primary border-2 border-white bg-transparent hover:bg-white",
          className,
        )}
      >
        {children}
      </button>
    );
  },
);

export default Button;
