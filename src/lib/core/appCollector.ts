import collector from "../../entity/collector";
import { CACHE_KEY } from "../../types/cache";
import cache from "../../utils/cache";
import logger from "../../utils/log";

export default class appCollector extends collector {
  public install() {
    logger.info(`[ AppCollector ] - Installed`);

    console.log('[  ]-13', cache.find(CACHE_KEY.Device));
  }
}
