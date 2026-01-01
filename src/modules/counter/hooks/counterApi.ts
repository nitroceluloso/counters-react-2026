import { useQuery } from "@tanstack/react-query";
import { getCounters } from "../api";

export function useCounterApi() {
  return useQuery({
    queryKey: ["counters"],
    queryFn: getCounters,
  });
}
