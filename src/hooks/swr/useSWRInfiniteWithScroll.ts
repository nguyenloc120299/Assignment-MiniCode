import { fetcher } from "api/request";
import { useCallback } from "react";

import useSWRInfinite from "swr/infinite";

interface useSwrInfiniteWithScrollProps {
  query?: any;
  getKeyUrl?: any;
  config?: any;
  formatKeyData?: string;
}

const useSwrInfiniteWithScroll = ({
  query,
  getKeyUrl,
  config,
  formatKeyData,
}: useSwrInfiniteWithScrollProps) => {
  const fetcherCallback = useCallback(
    (index: any, previousData: any) => {
      return getKeyUrl(index, query, previousData);
    },
    [getKeyUrl, formatKeyData, query]
  );

  const { data, error, size, setSize, isValidating, mutate } = useSWRInfinite(
    fetcherCallback,
    fetcher,
    config
  );

  const formatData = data
    ? data.map((item) => (formatKeyData ? item[formatKeyData] : item))
    : [];

  const dataShowing = formatData ? [].concat(...formatData) : [];

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = formatKeyData
    ? data?.[0]?.[formatKeyData]?.length === 0
    : data?.[0]?.length === 0;

  const isRefreshing = isValidating && data && data.length === size;

  return {
    data,
    dataShowing,
    isLoadingMore,
    isEmpty,
    isRefreshing,
    setSize,
    isLoadingInitialData,
    mutate,
    size,
  };
};

export default useSwrInfiniteWithScroll;
