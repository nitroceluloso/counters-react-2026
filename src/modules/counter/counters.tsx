import { Button } from "@/commons/components/button";
import { InputText } from "@/commons/components/input-text";

import "./counters.css";

export function Counters() {
  return (
    <div id="Counters">
      <section className="search">
        <InputText placeholder="Search counters" />
      </section>
      <section className="counters">{/*<Loader />*/}</section>
      <section className="actions">
        <Button variant="PRIMARY">+</Button>
      </section>
    </div>
  );
}
