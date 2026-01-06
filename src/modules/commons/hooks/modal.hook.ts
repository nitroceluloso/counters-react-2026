import { useState } from "react";

export function useModal() {
  const [isOpen, setModal] = useState(false);
  const open = () => setModal(true);
  const close = () => setModal(false);

  return {
    isOpen,
    open,
    close,
  };
}
