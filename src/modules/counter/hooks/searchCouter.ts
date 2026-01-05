import { useState } from "react";
import type { Counter } from "../types/counter";

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
