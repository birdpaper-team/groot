import { CACHE_KEY } from "../types/cache";
import logger from "./log";

export const _localStorage = {
  /**
   * 查找
   * @param key  key
   * @param parse 是否反序列化
   */
  find(key: CACHE_KEY, parse?: boolean): string | object | Array<unknown> {
    try {
      const data: string = window.localStorage.getItem(key) ?? "";

      if (parse && data) {
        return JSON.parse(data);
      }

      return data;
    } catch (err) {
      logger.error((err as Error).message);
      return "";
    }
  },
};
