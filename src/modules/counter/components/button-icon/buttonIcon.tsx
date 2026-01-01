import { Button, ButtonProps } from "@/commons/components/button";

interface ButtonIconProps extends ButtonProps {
  icon: string;
}

export function ButtonIcon({ icon, variant }: ButtonIconProps) {
  const src = `/img/${icon}.svg`;
  return (
    <Button variant={variant}>
      <img src={src} alt="" />
    </Button>
  );
}
