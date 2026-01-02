import type { ButtonProps } from "@/commons/components/button";
import { Button } from "@/commons/components/button";

interface ButtonIconProps extends ButtonProps {
  icon: "trashcan_red" | "plus_white" | "share";
}

export function ButtonIcon({ icon, variant }: ButtonIconProps) {
  const src = `/icons/${icon}.svg`;
  return (
    <Button variant={variant}>
      <img src={src} alt="" />
    </Button>
  );
}
