import "./summary.css";

interface SummaryProps {
  /**
   * How many counters are.
   */
  quantity: number;
  /**
   * Sum of add counters.
   */
  total: number;
  refresh: () => void;
  isRefreshing: boolean;
}

export function Summary({
  quantity,
  total,
  refresh,
  isRefreshing,
}: SummaryProps) {
  const src = isRefreshing
    ? "/icons/refresh_orange.svg"
    : "/icons/refresh_black.svg";

  return (
    <div className="summary">
      <span>{quantity} items</span>
      <span>{total} times</span>
      <button type="button" onClick={refresh} data-spinning={isRefreshing}>
        <img src={src} alt="" />
      </button>
      {isRefreshing && <span>Refreshing...</span>}
    </div>
  );
}
