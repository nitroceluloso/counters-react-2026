import type { PropsWithChildren } from "react";
import "./button.css";

type ButtonVariant = "PRIMARY" | "SECONDARY" | "DESTRUCTIVE";

interface ButtonProps {
  variant: ButtonVariant;
}

export function Button({ variant, children }: PropsWithChildren<ButtonProps>) {
  return (
    <button
      type="button"
      data-variant={variant.toLowerCase()}
      className={variant.toLowerCase()}
    >
      {children}
    </button>
  );
}
