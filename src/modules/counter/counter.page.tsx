import { Loader } from "@/commons/components/loader";
import { useModal } from "@/commons/hooks/modal.hook";
import { ButtonIcon } from "./components/button-icon/buttonIcon";
import { CounterList } from "./components/counter-list/counterList";
import { CreateCounterModal } from "./components/create-counter-modal";
import { Filter } from "./components/filter/filter";
import { NoCounters } from "./components/no-counters/noCounters";
import { Summary } from "./components/summary";
import { useCounterHandler } from "./hooks/counter-handler";

import "./counter.page.css";

export function Counters() {
  const { close, isOpen, open } = useModal();
  const {
    counterFiltered,
    counterListSum,
    counterQuantity,
    isLoadingFirstTime,
    queryTitle,
    refetch,
    setQueryTitle,
    showSummary,
    isRefetching,
    isEmptyState,
    hasData,
  } = useCounterHandler();

  return (
    <div id="Counters" data-empty={counterQuantity === 0}>
      <section className="search">
        <Filter onSearch={setQueryTitle} query={queryTitle} />
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
        {isLoadingFirstTime && <Loader />}

        {isEmptyState && <NoCounters />}

        {hasData && <CounterList list={counterFiltered!} />}
      </section>
      <section className="actions">
        <ButtonIcon icon="plus_white" variant="PRIMARY" onClick={open} />
        {/*<div className="secondary">
          <ButtonIcon
            icon="trashcan_red"
            variant="DESTRUCTIVE"
            onClick={open}
          />
          <ButtonIcon icon="share" variant="SECONDARY" onClick={open} />
        </div>*/}
      </section>
      <CreateCounterModal isOpen={isOpen} close={close} />
    </div>
  );
}
