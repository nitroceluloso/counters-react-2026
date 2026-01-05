import type { InputHTMLAttributes } from "react";
import "./inputText.css";

export function InputText(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="input-search">
      <img src="/icons/glass.svg" alt="" />
      <input {...props} type="text" data-shadow-05 />
    </div>
  );
}
