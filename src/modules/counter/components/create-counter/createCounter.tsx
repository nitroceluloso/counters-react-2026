import { Loader } from "@/commons/components/loader";
import {
  invalidateCounterApi,
  useCreateCounterApi,
} from "@/counter/hooks/api-counter";
import { useEffect, useRef, type ChangeEvent, type FormEvent } from "react";

import "./createCounter.css";

type CreateCounterProps = {
  setFormInvalid: (param: boolean) => void;
  goToNextStep: () => void;
  suggestedName: string | undefined;
  close: () => void;
};

export function CreateCounter({
  setFormInvalid: setIsFormInvalid,
  goToNextStep,
  suggestedName,
  close,
}: CreateCounterProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { mutate: createCounter, isPending: isCreating } =
    useCreateCounterApi();

  // Focus on input after modal open.
  useEffect(() => {
    inputRef.current?.focus();

    if (suggestedName && inputRef.current) {
      inputRef.current.value = suggestedName;
      setIsFormInvalid(false);
    }
  }, [suggestedName, setIsFormInvalid]);

  const onChangeName = (ev: ChangeEvent<HTMLInputElement>) => {
    const newValue = ev.target.value;
    setIsFormInvalid(newValue.length === 0);
  };

  const submit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    // To access this in the success, after the event is "no longer accessible".
    const target = ev.currentTarget;

    const formData = new FormData(ev.currentTarget);
    const name = formData.get("name") as string;

    createCounter(
      { title: name },
      {
        onSuccess: () => {
          invalidateCounterApi();
          target.reset();
          close();
        },
      },
    );
  };

  return (
    <div className="create-counter">
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
        Give it a name. Creative block? See{" "}
        <a href="#" onClick={goToNextStep}>
          examples
        </a>
        .
      </p>

      {isCreating && (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
}
