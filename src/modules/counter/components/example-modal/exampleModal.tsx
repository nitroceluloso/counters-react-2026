import { Modal } from "@/commons/components/modal";
import { Pill } from "@/commons/components/pill";
import {
  DRINKS_EXAMPLE,
  FOOD_EXAMPLE,
  MISC_EXAMPLE,
} from "./examples.constants";

import "./exampleModal.css";

interface ExampleModalProps {
  isOpen: boolean;
  close: () => void;
  onChooseCounter?: (counter: string) => void;
}

export function ExampleModal({ close, isOpen }: ExampleModalProps) {
  return (
    <Modal isOpen={isOpen} close={close} title="examples">
      <div className="example-modal">
        <p>Select an example to add it to your counters</p>

        <h3>Drinks</h3>
        <div className="row">
          {DRINKS_EXAMPLE.map((example) => (
            <Pill value={example} key={example} />
          ))}
        </div>

        <h3>Food</h3>
        <div className="row">
          {FOOD_EXAMPLE.map((example) => (
            <Pill value={example} key={example} />
          ))}
        </div>

        <h3>Misc</h3>
        <div className="row">
          {MISC_EXAMPLE.map((example) => (
            <Pill value={example} key={example} />
          ))}
        </div>
      </div>
    </Modal>
  );
}
