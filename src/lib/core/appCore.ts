import cache from "../../utils/cache";
import { GROOT_CONFIG, UUID } from "../../types/app";
import { CACHE_KEY } from "../../types/cache";
import { getUuid } from "../../utils/common";
import logger from "../../utils/log";

/**
 * App 核心
 * 控制插件应用配置等操作
 */
export default class appCore {
  /** 唯一ID标志 */
  public uuid!: UUID;

  /** 插件配置信息 */
  public config!: GROOT_CONFIG;

  constructor(config: GROOT_CONFIG) {
    this.initUuid();

    // 每次初始化，需要重新加载配置信息。
    this.config = config;
    cache.save(CACHE_KEY.Config, this.config, true);

    logger.info(`[ AppCore Constructor] - uuid: ${this.uuid}`);
  }

  initUuid() {
    const _uuid = cache.find(CACHE_KEY.Uuid) as UUID;

    if (!_uuid) {
      this.uuid = getUuid();
      cache.save(CACHE_KEY.Uuid, this.uuid);
      return;
    }
    this.uuid = _uuid;
  }
}
