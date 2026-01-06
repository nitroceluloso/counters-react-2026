import type { ButtonProps } from "@/commons/components/button";
import { Button } from "@/commons/components/button";

interface ButtonIconProps extends ButtonProps {
  icon: "trashcan_red" | "plus_white" | "share";
}

export function ButtonIcon({ icon, variant, ...props }: ButtonIconProps) {
  const src = `/icons/${icon}.svg`;
  return (
    <Button {...props} variant={variant}>
      <img src={src} alt="" />
    </Button>
  );
}
