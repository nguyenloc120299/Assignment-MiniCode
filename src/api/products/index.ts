import { CONFIG_APP } from "config";
import { getQueryFromObject } from "utils/string";

export const urlAssistApi = {
  getHistoriesAssist: (query: string) =>
    `/products${getQueryFromObject(query)}`,
};

export const getKeyUrlProducts = (pageIndex: number, query: any) => {
  return urlAssistApi.getHistoriesAssist({
    ...query,
    limit: CONFIG_APP.DEFAULT_LIMIT,
    skip: 20,
  });
};
