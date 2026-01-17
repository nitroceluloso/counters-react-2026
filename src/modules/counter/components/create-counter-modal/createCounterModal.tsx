import { Button } from "@/commons/components/button";
import { Modal } from "@/commons/components/modal";
import {
  invalidateCoutnerApi,
  useCreateCounterApi,
} from "@/counter/hooks/api-counter";
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { Loader } from "@/commons/components/loader";

import "./createCounterModal.css";

interface CreateCounterModal {
  isOpen: boolean;
  close: () => void;
}

export function CreateCounterModal({ isOpen, close }: CreateCounterModal) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFormInvalid, setFormInvalid] = useState(true);
  const { mutate: createCounter, isPending: isCreating } =
    useCreateCounterApi();

  // Focus on input after modal open.
  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();
  }, [isOpen]);

  const onChangeName = (ev: ChangeEvent<HTMLInputElement>) => {
    const newValue = ev.target.value;
    setFormInvalid(newValue.length === 0);
  };

  const submit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    // To access this in the success, after the event is "no longer accessible".
    const target = ev.currentTarget;

    const formData = new FormData(ev.currentTarget);
    const name = formData.get("name");

    createCounter(
      { title: name as string },
      {
        onSuccess: () => {
          invalidateCoutnerApi();
          target.reset();
          close();
        },
      },
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      title="create counter"
      close={close}
      option={
        <Button
          variant="PRIMARY"
          disabled={isFormInvalid || isCreating}
          type="submit"
          form="CREATE_COUNTER"
        >
          Save
        </Button>
      }
    >
      <div className="create-counter-modal">
        <form id="CREATE_COUNTER" onSubmit={submit}>
          <label>
            Name
            <input
              ref={inputRef}
              type="text"
              name="name"
              placeholder="Cups of coffee"
              onChange={onChangeName}
            />
          </label>
        </form>
        <p>
          Give it a name. Creative block? See <span>examples</span>.
        </p>

        {isCreating && (
          <div>
            <Loader />
          </div>
        )}
      </div>
    </Modal>
  );
}
