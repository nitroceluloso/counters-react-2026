import { Button } from "src/components/button";
import { InputText } from "src/components/input-text";
// import { Loader } from "src/components/loader/loader";

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
