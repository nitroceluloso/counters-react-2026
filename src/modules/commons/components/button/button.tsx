import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import "./button.css";

type ButtonVariant = "PRIMARY" | "SECONDARY" | "TERTIARY" | "DESTRUCTIVE";

// Omit<
//   ButtonHTMLAttributes<HTMLButtonElement>,
//   "type"
// >

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  withShadow?: boolean;
}

export function Button({
  children,
  type = "button",
  variant,
  withShadow = false,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      type={type}
      data-variant={variant}
      className="btn"
      data-shadow-15={withShadow}
      {...props}
    >
      {children}
    </button>
  );
}
