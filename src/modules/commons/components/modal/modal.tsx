import type { PropsWithChildren, ReactNode } from "react";

import "./modal.css";

interface ModalProps {
  isOpen: boolean;
  title: string;
  close: () => void;
  option?: ReactNode;
}

export function Modal({
  children,
  close,
  isOpen = false,
  title,
  option,
}: PropsWithChildren<ModalProps>) {
  return (
    <div className="modal">
      {isOpen && <div id="bg-cover"></div>}
      <dialog open={isOpen}>
        <div className="head">
          <button className="close" type="button" onClick={close}>
            <img src="/icons/close.svg" alt="" />
          </button>
          <h2>{title}</h2>
          <div>{option}</div>
        </div>
        <div className="body">{children}</div>
      </dialog>
    </div>
  );
}
