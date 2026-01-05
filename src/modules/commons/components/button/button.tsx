import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import "./button.css";

type ButtonVariant = "PRIMARY" | "SECONDARY" | "TERTIARY" | "DESTRUCTIVE";

export interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type"
> {
  variant: ButtonVariant;
  withShadow?: boolean;
}

export function Button({
  variant,
  children,
  withShadow = false,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      {...props}
      type="button"
      data-variant={variant}
      className="btn"
      data-shadow-15={withShadow}
    >
      {children}
    </button>
  );
}
