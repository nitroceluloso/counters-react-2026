import type { PropsWithChildren } from "react";
import { Button } from "../button";

import "./modalError.css";
// ? Como especificar las combinaciones de si es withRetry tiene que rentry.
interface ModalErrorProps {
  isOpen: boolean;
  title: string;
  message: string;
  close: () => void;
  retry?: () => void;
}

export function ModalError({
  isOpen,
  title,
  message,
  retry,
  close,
}: PropsWithChildren<ModalErrorProps>) {
  const withRetry = retry !== undefined;

  return (
    <div className="modal-error" data-is-open={isOpen}>
      {isOpen && <div id="bg-cover"></div>}
      <dialog open={isOpen}>
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="actions">
          {!withRetry && (
            <Button variant="PRIMARY" onClick={close}>
              Dismiss
            </Button>
          )}

          {withRetry && (
            <>
              <Button variant="PRIMARY" onClick={retry}>
                Retry
              </Button>
              <Button variant="SECONDARY" onClick={close}>
                Dismiss
              </Button>
            </>
          )}
        </div>
      </dialog>
    </div>
  );
}
