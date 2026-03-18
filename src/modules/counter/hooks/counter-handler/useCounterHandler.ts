import { useCounterApi } from "../api-counter";
import { useSearchCounter } from "../search-counter";

export function useCounterHandler() {
  const {
    data: counterList,
    isFetching: isLoading,
    refetch,
    isRefetching,
  } = useCounterApi();

  const { counterFiltered, queryTitle, setQueryTitle } =
    useSearchCounter(counterList);

  const isLoadingFirstTime = isLoading && !isRefetching;
  const isEmptyState = !isLoadingFirstTime && counterList?.length === 0;
  const hasData = !isLoadingFirstTime && counterList?.length !== 0;

  const counterQuantity = counterFiltered?.length ?? 0;
  const showSummary = (counterFiltered?.length ?? 0) > 0;
  const counterListSum =
    counterFiltered?.reduce((prev, act) => prev + act.count, 0) ?? 0;

  return {
    refetch,
    counterFiltered,
    queryTitle,
    setQueryTitle,
    isLoadingFirstTime,
    counterQuantity,
    showSummary,
    counterListSum,
    isEmptyState,
    hasData,
    isRefetching,
  };
}
