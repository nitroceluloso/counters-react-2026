import { Loader } from "@/commons/components/loader";
import { ButtonIcon } from "./components/button-icon/buttonIcon";
import { CounterList } from "./components/counter-list/counterList";
import { Filter } from "./components/filter/filter";
import { NoCounters } from "./components/no-counters/noCounters";
import { Summary } from "./components/summary";
import { useCounterApi } from "./hooks/counterApi";
import { useSearchCounter } from "./hooks/searchCouter";

import "./counter.page.css";

export function Counters() {
  const {
    data: counterList,
    isFetching: isLoading,
    refetch,
    isRefetching,
  } = useCounterApi();
  const { counterFiltered, queryTitle, setQueryTitle } =
    useSearchCounter(counterList);

  const loadingFirstTime = isLoading && !isRefetching;
  const counterQuantity = counterList?.length ?? 0;
  const showSummary = (counterFiltered?.length ?? 0) > 0;
  const counterListSum =
    counterList?.reduce((prev, act) => prev + act.count, 0) ?? 0;

  return (
    <div id="Counters" data-empty={counterQuantity === 0}>
      <section className="search">
        <Filter onSearch={(query) => setQueryTitle(query)} query={queryTitle} />
      </section>
      {showSummary && (
        <Summary
          quantity={counterQuantity}
          total={counterListSum}
          isRefreshing={isRefetching}
          refresh={refetch}
        />
      )}
      <section className="counters">
        {loadingFirstTime && <Loader />}

        {!loadingFirstTime && counterList?.length === 0 && <NoCounters />}

        {!loadingFirstTime && counterList?.length !== 0 && (
          <CounterList list={counterFiltered!} />
        )}
      </section>
      <section className="actions">
        <ButtonIcon icon="plus_white" variant="PRIMARY" />
      </section>
    </div>
  );
}
