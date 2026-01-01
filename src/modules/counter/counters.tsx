import { Button } from "@/commons/components/button";
import { InputText } from "@/commons/components/input-text";
import { Loader } from "@/commons/components/loader";
import { useCounterApi } from "./hooks/counterApi";

import "./counters.css";

export function Counters() {
  const { isFetching: isLoading } = useCounterApi();

  return (
    <div id="Counters">
      <section className="search">
        <InputText placeholder="Search counters" />
      </section>
      <section className="counters">{isLoading && <Loader />}</section>
      <section className="actions">
        <Button variant="PRIMARY">+</Button>
      </section>
    </div>
  );
}
