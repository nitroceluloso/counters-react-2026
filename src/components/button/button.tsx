import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import "./button.css";

type ButtonVariant = "PRIMARY" | "SECONDARY" | "DESTRUCTIVE";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
}

export function Button({
  variant,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      {...props}
      type="button"
      data-variant={variant.toLowerCase()}
      className={variant.toLowerCase()}
    >
      {children}
    </button>
  );
}
