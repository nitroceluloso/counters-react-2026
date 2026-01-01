import http from "@/commons/http";
import { COUNTER_PATHS } from "./constants";

interface CounterResponse {
  id: number;
  title: string;
  counter: number;
}

export async function getCounters(): Promise<CounterResponse[]> {
  return await http.get(COUNTER_PATHS.counters);
}
