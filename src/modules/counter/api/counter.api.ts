import http from "@/commons/http";
import { COUNTER_PATHS } from "./constants";

interface CounterResponse {
  id: number;
  title: string;
  counter: number;
}

export async function getCounters(): Promise<CounterResponse[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return await http.get(COUNTER_PATHS.counters);
}
