import { InputText } from "@/commons/components/input-text";
import { Loader } from "@/commons/components/loader";
import { ButtonIcon } from "./components/button-icon/buttonIcon";
import { CounterList } from "./components/counter-list/counterList";
import { useCounterApi } from "./hooks/counterApi";

import "./counters.css";

export function Counters() {
  const { data: counterList, isFetching: isLoading } = useCounterApi();

  return (
    <div id="Counters">
      <section className="search">
        <InputText placeholder="Search counters" />
      </section>
      <section className="counters">
        {isLoading && <Loader />}
        {!isLoading && <CounterList list={counterList!} />}
      </section>
      <section className="actions">
        <ButtonIcon icon="plus_white" variant="PRIMARY" />
      </section>
    </div>
  );
}
