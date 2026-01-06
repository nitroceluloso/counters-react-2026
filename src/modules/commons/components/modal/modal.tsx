import type { PropsWithChildren } from "react";

import "./modal.css";

interface ModalProps {
  isOpen: boolean;
  title: string;
  close: () => void;
}

export function Modal({
  children,
  close,
  isOpen = false,
  title,
}: PropsWithChildren<ModalProps>) {
  return (
    <div className="modal">
      {isOpen && <div id="bg-cover"></div>}
      <dialog open={isOpen}>
        <div className="head">
          <button type="button" onClick={close}>
            <img src="/icons/close.svg" alt="" />
          </button>
          <h2>{title}</h2>
        </div>
        <div className="body">{children}</div>
      </dialog>
    </div>
  );
}
