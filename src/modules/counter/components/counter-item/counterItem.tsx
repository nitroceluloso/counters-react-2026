import "./counterItem.css";

interface CounterItemProps {
  title: string;
  counter: number;
}

export function CounterItem({ counter, title }: CounterItemProps) {
  return (
    <div className="counter-item">
      <div>
        <p>{title}</p>
      </div>
      <div>
        <div className="counter-actions">
          <button type="button">
            {counter === 0 && <img src="/icons/minus_silver.svg" alt="" />}
            {counter !== 0 && <img src="/icons/minus_orange.svg" alt="" />}
          </button>
          <span data-value={counter}>{counter}</span>
          <button type="button">
            <img src="/icons/plus_orange.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
