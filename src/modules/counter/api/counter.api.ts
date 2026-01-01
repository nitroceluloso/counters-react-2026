import http from "@/commons/http";
import type { Counter } from "../types/counter";
import { COUNTER_PATHS } from "./constants";

export async function getCounters(): Promise<Counter[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return await http.get(COUNTER_PATHS.counters);
}
