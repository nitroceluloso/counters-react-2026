import type { PropsWithChildren } from "react";
import { Button } from "../button";

import "./modalError.css";
// ? Como especificar las combinaciones de si es withRetry tiene que rentry.
interface ModalErrorProps {
  isOpen: boolean;
  title: string;
  message: string;
  close: () => void;
  action?: () => void;
}

export function ModalError({
  isOpen,
  title,
  message,
  action,
  close,
}: PropsWithChildren<ModalErrorProps>) {
  return (
    <div className="modal-confirmation" data-is-open={isOpen}>
      {isOpen && <div id="bg-cover"></div>}
      <dialog open={isOpen}>
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="actions">
          <Button variant="PRIMARY" onClick={action}>
            Cancel
          </Button>
          <Button variant="DESTRUCTIVE" onClick={close}>
            Delete
          </Button>
        </div>
      </dialog>
    </div>
  );
}
