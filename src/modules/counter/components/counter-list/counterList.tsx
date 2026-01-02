import type { Counter } from "@/counter/types/counter";
import { CounterItem } from "../counter-item";

interface CounterListProps {
  list: Counter[];
}

export function CounterList({ list }: CounterListProps) {
  return (
    <>
      {list.map((counter) => (
        <CounterItem
          key={counter.id}
          counter={counter.count}
          title={counter.title}
        />
      ))}
    </>
  );
}
