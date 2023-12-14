import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "~/utils/cn";
import { Spinner } from "../Loading";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
        premium:
          "font-bold bg-clip-padding border-[2px] before:-m-[2px] rounded-md before:rounded-md border-transparent bg-white dark:bg-secondary text-primary hover:before:bg-gradient-to-r hover:before:from-pink-500 hover:before:to-purple-500 before:bg-gradient-to-r before:from-purple-500 before:to-pink-500 hover:bg-white/90 dark:hover:bg-secondary/90 relative before:content before:absolute before:z-[-1] before:inset-0 before:bg-primary before:transition-opacity before:duration-500 before:delay-100 hover:before:opacity-100",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, loading, ...props }, ref) => {
    return (
      <button
        className={cn(
          "relative flex select-none items-center justify-center",
          buttonVariants({ variant, size, className }),
        )}
        data-loading={loading}
        ref={ref}
        {...props}
      >
        {loading && <Spinner className="absolute text-primary" />}
        {loading ? <span className="opacity-0"> {children}</span> : children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
