import { CACHE_KEY, CACHE_MODE } from "../types/cache";
import { _localStorage } from "./localStorage";

/**
 * 数据缓存统一处理工具
 */
export class Cache {
  private static instance: Cache;

  public mode: CACHE_MODE = CACHE_MODE.Localstorage;

  private modeMap = { _localStorage };

  /**
   * 根据 key 值查找缓存数据
   * @param key CACHE_KEY
   * @returns data
   */
  find = (key: CACHE_KEY, parse: boolean = false) => this.modeMap[this.mode].find(key, parse);

  /**
   * 保存
   * @param key key
   * @param data 数据包
   * @param stringify 是否序列化
   */
  save = (key: CACHE_KEY, data: string | object | Array<unknown>, stringify: boolean = false) => {
    return this.modeMap[this.mode].save(key, data, stringify);
  };

  /**
   * 删除缓存
   * @param key
   */
  remove = (key: CACHE_KEY) => {};

  /** 获取当前缓存方式 */
  getMode = () => this.mode;

  /** 设置当前缓存方式 */
  setMode = (mode: CACHE_MODE) => (this.mode = mode);

  public static install(): Cache {
    if (Cache.instance) {
      return Cache.instance;
    }

    const _cache = new Cache();
    Cache.instance = _cache;

    return _cache;
  }
}

export default Cache.install();
