import collectorData from "../entity/collectorData";
import { UUID } from "../types/app";
import { CACHE_KEY } from "../types/cache";
import { COLLECTOR_TYPE } from "../types/collectorType";
import cache from "../utils/cache";

export default function useGroot() {
  /** 唯一ID标志 */
  const _uuid: UUID = cache.find(CACHE_KEY.Uuid) as UUID;

  /** 手动采集 */
  const record = (data: unknown) => {
    const _data: collectorData = new collectorData();

    _data.type = COLLECTOR_TYPE.Custom;
    _data.timestamp = Date.now();
    _data.data = data;
    cache.add(CACHE_KEY.Custom, _data);
  };

  return {
    _uuid,
    record,
  };
}
