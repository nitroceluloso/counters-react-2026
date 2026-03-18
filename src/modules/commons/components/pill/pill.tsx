import "./pill.css";

interface PillProps {
  value: string;
  onClick: (value: string) => void;
}

export function Pill({ value, onClick }: PillProps) {
  const onClickHandler = () => onClick(value);

  return (
    <button className="pill" data-shadow-10 onClick={onClickHandler}>
      {value}
    </button>
  );
}
