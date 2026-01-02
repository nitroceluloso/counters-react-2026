import { InputText } from "@/commons/components/input-text";
import { Loader } from "@/commons/components/loader";
import { ButtonIcon } from "./components/button-icon/buttonIcon";
import { CounterList } from "./components/counter-list/counterList";
import { NoCounters } from "./components/no-counters/noCounters";
import { Summary } from "./components/summary";
import { useCounterApi } from "./hooks/counterApi";

import "./counter.page.css";

export function Counters() {
  const {
    data: counterList,
    isFetching: isLoading,
    refetch,
    isRefetching,
  } = useCounterApi();

  const loadingFirstTime = isLoading && !isRefetching;
  const counterListSum =
    counterList?.reduce((prev, act) => prev + act.count, 0) ?? 0;

  return (
    <div id="Counters">
      <section className="search">
        <InputText placeholder="Search counters" />
      </section>
      <section className="counters">
        {loadingFirstTime && <Loader />}

        {!loadingFirstTime && counterList?.length === 0 && <NoCounters />}

        {!loadingFirstTime && counterList?.length !== 0 && (
          <>
            <Summary
              quantity={counterList?.length ?? 0}
              total={counterListSum}
              isRefreshing={isRefetching}
              refresh={refetch}
            />
            <CounterList list={counterList!} />
          </>
        )}
      </section>
      <section className="actions">
        <ButtonIcon icon="plus_white" variant="PRIMARY" />
      </section>
    </div>
  );
}
