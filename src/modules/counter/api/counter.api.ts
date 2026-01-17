import http from "@/commons/http";
import type { Counter } from "../types/counter";
import { COUNTER_PATHS } from "./constants";

export async function getCounters(): Promise<Counter[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return await http.get(COUNTER_PATHS.LIST);
}

export async function createCounter(payload: Record<string, string>) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return await http.post(COUNTER_PATHS.CREATE, payload);
}
