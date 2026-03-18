import type { Counter } from "@/counter/types/counter";
import { useState } from "react";

export function useSearchCounter(counterList: Counter[] | undefined) {
  const [queryTitle, setQueryTitle] = useState("");

  if (queryTitle === "") {
    return {
      queryTitle,
      setQueryTitle,
      counterFiltered: counterList,
    };
  }

  return {
    queryTitle,
    setQueryTitle,
    counterFiltered: counterList?.filter((counter) =>
      counter.title.includes(queryTitle),
    ),
  };
}
