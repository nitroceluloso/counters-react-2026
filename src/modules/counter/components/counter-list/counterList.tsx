import type { Counter } from "@/counter/types/counter";
import { CounterItem } from "../counter-item";
import { useState } from "react";

interface CounterListProps {
  list: Counter[];
}

export function CounterList({ list }: CounterListProps) {
  const [selectedList, setSelectedList] = useState(new Set());

  const onSelect = (id: number) => {
    const list = new Set(selectedList);
    if (list.has(id)) {
      list.delete(id);
    } else {
      list.add(id);
    }
    setSelectedList(list);
  };
  return (
    <>
      {list.map((counter) => (
        <CounterItem
          key={counter.id}
          id={counter.id}
          count={counter.count}
          title={counter.title}
          isSelected={selectedList.has(counter.id)}
          onSelect={onSelect}
        />
      ))}
      {list.length === 0 && (
        <div className="empty-list">
          <p>No results</p>
        </div>
      )}
    </>
  );
}
