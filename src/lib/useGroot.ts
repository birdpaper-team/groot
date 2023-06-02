import { UUID } from "../types/app";
import { CACHE_KEY } from "../types/cache";
import cache from "../utils/cache";

export default function useGroot() {
  /** 唯一ID标志 */
  const _uuid: UUID = cache.find(CACHE_KEY.Uuid) as UUID;

  return {
    _uuid,
  };
}
