import { http, HttpResponse } from "msw";
import { COUNTERS } from "./mock";

const ENDPOINTS = {
  list: "/api/counters",
  create: "/api/counters",
  remove: "/api/counters",
  increment: "/api/counters/inc",
  decrement: "/api/counters/dec",
} as const;

export const handlers = [
  http.get(ENDPOINTS.list, () => {
    return HttpResponse.json(COUNTERS.MULTIPLE);
  }),
  http.post(ENDPOINTS.create, async ({ request }) => {
    const counter = (await request.json()) as {
      // id: number;
      title: string;
      // count: number;
    };
    const counterNew = {
      ...counter,
      id: Math.trunc(Math.random() * 10000000),
      count: 0,
    };

    COUNTERS.MULTIPLE.push(counterNew);

    return HttpResponse.json(counterNew);
  }),
  http.post(ENDPOINTS.increment, async ({ request }) => {
    const counter = (await request.json()) as {
      id: number;
    };

    COUNTERS.MULTIPLE = COUNTERS.MULTIPLE.map((item) => {
      if (item.id === counter.id) {
        return { ...item, count: item.count + 1 };
      } else {
        return item;
      }
    });

    return HttpResponse.json(COUNTERS.MULTIPLE);
  }),
  http.post(ENDPOINTS.decrement, async ({ request }) => {
    const counter = (await request.json()) as {
      id: number;
    };

    COUNTERS.MULTIPLE = COUNTERS.MULTIPLE.map((item) => {
      if (item.id === counter.id) {
        return { ...item, count: item.count - 1 };
      } else {
        return item;
      }
    });

    return HttpResponse.json(COUNTERS.MULTIPLE);
  }),
];
