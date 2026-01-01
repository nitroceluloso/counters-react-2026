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
      <div className="counter-actions">
        <button type="button">
          <img src="/icons/minus.svg" alt="" />
        </button>
        <span data-value={counter}>{counter}</span>
        <button type="button">
          <img src="/icons/plus_orange.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
