import type { InputHTMLAttributes } from "react";
import "./inputText.css";

export function InputText(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} type="text" data-shadow-05 />;
}
