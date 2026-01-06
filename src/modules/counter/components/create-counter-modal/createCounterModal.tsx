import { Modal } from "@/commons/components/modal";

import "./createCounterModal.css";

interface CreateCounterModal {
  isOpen: boolean;
  close: () => void;
}

export function CreateCounterModal({ isOpen, close }: CreateCounterModal) {
  return (
    <Modal isOpen={isOpen} title="create counter" close={close}>
      <div className="create-counter-modal">
        <form>
          <label>
            Name
            <input type="text" name="name" placeholder="Cups of coffee" />
          </label>
        </form>
        <p>
          Give it a name. Creative block? See <span>examples</span>.
        </p>
      </div>
    </Modal>
  );
}
