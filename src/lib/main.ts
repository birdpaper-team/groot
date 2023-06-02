import { App } from "vue";
import { GROOT_CONFIG } from "../types/app";
import deviceCollector from "./core/deviceCollector";
import collector from "../entity/collector";
import appCore from "./core/appCore";
import useGroot from "./useGroot";

class Groot {
  public coreList: any[] = [];

  constructor(config: GROOT_CONFIG) {
    new appCore(config);
  }

  async install(Vue: App) {
    this.coreList.push(new deviceCollector());

    for (let i = 0; i < this.coreList.length; i++) {
      let dataCollector: collector = this.coreList[i];
      dataCollector.init();
    }
  }
}

export default Groot;

export { useGroot };
