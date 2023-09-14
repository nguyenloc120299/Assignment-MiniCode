import { getKeyUrlProducts } from "api/products";
import useSwrInfiniteWithScroll from "./useSWRInfiniteWithScroll";

export const useSwrInfiniteProducts = (query: any) => {
  return useSwrInfiniteWithScroll({
    getKeyUrl: getKeyUrlProducts,
    formatKeyData: "products",
    query
  });
};
