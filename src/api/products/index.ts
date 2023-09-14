/* eslint-disable @typescript-eslint/no-redeclare */
import { CONFIG_APP } from "config";
import { getQueryFromObject } from "utils/string";

type Query = {
  search?: string;
  limit: number;
  skip: number;
  q?: string;
};

type UrlProductApi = {
  getProductList: (query: Query) => string;
  searchProductList: (query: Query) => string;
};

type GetKeyUrlProducts = (pageIndex: number, query: Query) => string;

export const UrlProductApi: UrlProductApi = {
  getProductList: (query) => `/products${getQueryFromObject(query)}`,
  searchProductList: (query) => `/products/search${getQueryFromObject(query)}`,
};

export const getKeyUrlProducts: GetKeyUrlProducts = (
  pageIndex: number,
  query: any
) => {
  if (!query.search)
    return UrlProductApi.getProductList({
      limit: CONFIG_APP.DEFAULT_LIMIT,
      skip: pageIndex * CONFIG_APP.DEFAULT_LIMIT,
    });
  else
    return UrlProductApi.searchProductList({
      limit: CONFIG_APP.DEFAULT_LIMIT,
      skip: pageIndex * CONFIG_APP.DEFAULT_LIMIT,
      q: query.search,
    });
};
