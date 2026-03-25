import { ModalError } from "@/commons/components/modal-error/modalError";
import { useModal } from "@/commons/hooks/modal.hook";
import {
  invalidateCounterApi,
  useDecrementCounterApi,
  useIncrementCounterApi,
} from "@/counter/hooks/api-counter/counterApi";
import type { Counter } from "@/counter/types/counter";
import { useState } from "react";

import "./counterItem.css";

interface CounterItem extends Counter {
  isSelected: boolean;
  onSelect: (id: number) => void;
}

export function CounterItem({
  count,
  title,
  id,
  isSelected = false,
  onSelect,
}: CounterItem) {
  const [errorCount, setErrorCout] = useState(0);
  const { close, isOpen, open } = useModal();
  const { mutate: incrementCounter } = useIncrementCounterApi();
  const { mutate: decrementCounter } = useDecrementCounterApi();

  const incrementCounterHandler = () => {
    // ev.stopPropagation();
    incrementCounter(
      {
        id,
      },
      {
        onSuccess: () => {
          invalidateCounterApi();
          if (isOpen) close();
        },
        onError: () => {
          setErrorCout(count + 1);
          open();
        },
      },
    );
  };

  const decrementCounterHandler = () => {
    // ev.stopPropagation();
    decrementCounter(
      {
        id,
      },
      {
        onSuccess: () => {
          invalidateCounterApi();
          if (isOpen) close();
        },
        onError: () => {
          setErrorCout(count - 1);
          open();
        },
      },
    );
  };

  return (
    <div className="counter-item" data-is-selected={isSelected}>
      {/* TODO: move this to parent div. */}
      <div onClick={() => onSelect(id)}>
        <p>{title}</p>
      </div>
      <div>
        <div className="counter-actions">
          <button
            type="button"
            disabled={count === 0}
            onClick={decrementCounterHandler}
          >
            {count === 0 && <img src="/icons/minus_silver.svg" alt="" />}
            {count !== 0 && <img src="/icons/minus_orange.svg" alt="" />}
          </button>
          <span data-value={count}>{count}</span>
          <button type="button" onClick={incrementCounterHandler}>
            <img src="/icons/plus_orange.svg" alt="" />
          </button>
        </div>
      </div>
      <ModalError
        close={close}
        isOpen={isOpen}
        message="The Internet connection appears to be offline."
        title={`Couldn’t update "${title}" to ${errorCount}`}
        retry={incrementCounterHandler}
      />
    </div>
  );
}
