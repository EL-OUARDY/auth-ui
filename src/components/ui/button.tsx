import clsx from "clsx";
import { ButtonHTMLAttributes, ReactElement, forwardRef } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactElement | string;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={clsx(
          "bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 w-fit cursor-pointer items-center justify-center px-4 py-2 text-xl whitespace-nowrap transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
      >
        {children}
      </button>
    );
  },
);

export default Button;
