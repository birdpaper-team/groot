import collector from "../../entity/collector";
import logger from "../../utils/log";

export default class deviceCollector extends collector {

  public install() {
    logger.info(`deviceCollector-install()`);
    const data = navigator;
    logger.info(data);
  }
}