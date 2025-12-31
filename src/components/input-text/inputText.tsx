import type { InputHTMLAttributes } from "react";
import "./inputText.css";

// interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputText(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} type="text" />;
}
