import { http, HttpResponse } from "msw";
import { COUNTERS } from "./mock";

export const handlers = [
  http.get("/api/counters", () => {
    return HttpResponse.json(COUNTERS.MULTIPLE);
  }),
  http.post("/api/counters", async ({ request }) => {
    const counter = (await request.json()) as {
      id: number;
      title: string;
      count: number;
    };
    const counterNew = {
      ...counter,
      id: Math.trunc(Math.random() * 10000000),
      count: 0,
    };

    COUNTERS.MULTIPLE.push(counterNew);

    return HttpResponse.json(COUNTERS.MULTIPLE);
  }),
];
