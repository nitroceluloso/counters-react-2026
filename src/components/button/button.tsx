import { Loader } from "src/loader";

type ButtonVariants = "PRIMARY" | "SECONDARY" | "DESTRUCTIVE";

export function Button() {
  return (
    <button>
      <Loader />
    </button>
  );
}
