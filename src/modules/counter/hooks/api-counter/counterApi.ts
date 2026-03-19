import { useMutation, useQuery } from "@tanstack/react-query";
import { getCounters } from "../../api";
import {
  createCounter,
  decrementCounter,
  incrementCounter,
} from "../../api/counter.api";
import queryClient from "@/commons/lib/tanstack-query";
import { COUNTER_API_KEYS } from "./constants";

export function useCounterApi() {
  return useQuery({
    queryKey: COUNTER_API_KEYS.LIST,
    queryFn: getCounters,
  });
}

export function invalidateCounterApi() {
  queryClient.invalidateQueries({
    queryKey: COUNTER_API_KEYS.LIST,
    exact: true,
  });
}

export function useCreateCounterApi() {
  return useMutation({
    mutationFn: createCounter,
  });
}

export function useIncrementCounterApi() {
  return useMutation({
    mutationFn: incrementCounter,
  });
}

export function useDecrementCounterApi() {
  return useMutation({
    mutationFn: decrementCounter,
  });
}
