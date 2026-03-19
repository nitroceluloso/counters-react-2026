import http from "@/commons/http";
import type { Counter } from "../types/counter";
import { COUNTER_PATHS } from "./constants";

async function hold(ms = 500) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getCounters(): Promise<Counter[]> {
  // await new Promise((resolve) => setTimeout(resolve, 500));
  await hold();
  return await http.get(COUNTER_PATHS.LIST);
}

interface CreateCounterRequest {
  title: string;
}

export async function createCounter(payload: CreateCounterRequest) {
  await hold();
  return await http.post<Counter, CreateCounterRequest>(
    COUNTER_PATHS.CREATE,
    payload,
  );
}

interface IncrementCounterRequest {
  id: number;
}

export async function incrementCounter(payload: IncrementCounterRequest) {
  await hold();
  return await http.post<Counter, IncrementCounterRequest>(
    COUNTER_PATHS.INCREMENT,
    payload,
  );
}

interface DecrementCounterRequest {
  id: number;
}

export async function decrementCounter(payload: DecrementCounterRequest) {
  await hold();
  return await http.post<Counter, DecrementCounterRequest>(
    COUNTER_PATHS.DECREMENT,
    payload,
  );
}
