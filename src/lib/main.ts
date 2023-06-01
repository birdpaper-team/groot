import { App } from "vue";
import useGroot from "./useGroot";
import { GROOT_CONFIG } from "../types/app";
import logger from "../utils/log";
import deviceCollector from "./core/deviceCollector";
import collector from "../entity/collector";
import appCollector from "./core/appCollector";

class Groot {
  public api: string = "";

  public collectorList: any[] = [];

  constructor(config: GROOT_CONFIG) {
    this.api = config.sendConfig.api;
  }

  async install(Vue: App) {
    logger.info(this.api);
    this.collectorList = [new appCollector(), new deviceCollector()];

    for (let i = 0; i < this.collectorList.length; i++) {
      let dataCollector: collector = this.collectorList[i];
      dataCollector.init();
    }
  }
}

export default Groot;

export { useGroot };
