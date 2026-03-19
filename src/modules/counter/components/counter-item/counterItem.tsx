import {
  invalidateCounterApi,
  useDecrementCounterApi,
  useIncrementCounterApi,
} from "@/counter/hooks/api-counter/counterApi";
import type { Counter } from "@/counter/types/counter";
import "./counterItem.css";

export function CounterItem({ count, title, id }: Counter) {
  const { mutate: incrementCounter } = useIncrementCounterApi();
  const { mutate: decrementCounter } = useDecrementCounterApi();

  const incrementCounterHandler = () => {
    incrementCounter(
      {
        id,
      },
      {
        onSuccess: () => {
          invalidateCounterApi();
        },
      },
    );
  };

  const decrementCounterHandler = () => {
    decrementCounter(
      {
        id,
      },
      {
        onSuccess: () => {
          invalidateCounterApi();
        },
      },
    );
  };

  return (
    <div className="counter-item">
      <div>
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
    </div>
  );
}
