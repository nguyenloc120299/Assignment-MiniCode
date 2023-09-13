import { fetcher } from "api/request";
import { CONFIG_APP } from "config";
import useSWRInfinite from "swr/infinite";

interface useSwrInfiniteWithScrollProps {
  query?: any;
  getKeyUrl?: any;
  config?: any;
  formatKeyData?: string;
  newEndpoint?: boolean;
}

const useSwrInfiniteWithScroll = ({
  query,
  getKeyUrl,
  config,
  formatKeyData,
}: useSwrInfiniteWithScrollProps) => {
  const n = useSWRInfinite(
    (index, previousData) => getKeyUrl(index, query, previousData),
    fetcher,
    config
  );

    console.log(n);
    
    
//   const formatData = data
//     ? data.map((item) => (formatKeyData ? item[formatKeyData] : item))
//     : [];
//   const dataShowing = formatData ? [].concat(...formatData) : [];

//   const isLoadingInitialData = !data && !error;
//   const isLoadingMore =
//     isLoadingInitialData ||
//     (size > 0 && data && typeof data[size - 1] === "undefined");
//   // @ts-ignore
//   const isEmpty = formatKeyData
//     ? data?.[0]?.[formatKeyData]?.length === 0
//     : data?.[0]?.length === 0;
//   const isReachingEnd =
//     isEmpty ||
//     (data &&
//       // @ts-ignore
//       (formatKeyData
//         ? data[data.length - 1]?.[formatKeyData]?.length
//         : data[data.length - 1]?.length) <
//         (query?.rowPerPage || CONFIG_APP.DEFAULT_LIMIT));
//   const isRefreshing = isValidating && data && data.length === size;

//   return {
//     data,
//     // dataShowing,
//     // isLoadingMore,
//     // isEmpty,
//     // isReachingEnd,
//     // isRefreshing,
//     // setSize,
//     // isLoadingInitialData,
//     mutate,
//     size,
//  };
};

export default useSwrInfiniteWithScroll;
