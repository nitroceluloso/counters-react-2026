import "./pill.css";

interface PillProps {
  value: string;
}

export function Pill({ value }: PillProps) {
  return (
    <div className="pill" data-shadow-10>
      <span>{value}</span>
    </div>
  );
}
