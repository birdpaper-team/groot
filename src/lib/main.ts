import { App } from "vue";
import { GROOT_CONFIG } from "../types/app";
import deviceCollector from "./core/deviceCollector";
import collector from "../entity/collector";
import appCore from "./core/appCore";
import useGroot from "./useGroot";

class Groot {
  public coreCollectors: collector[] = [];

  constructor(config: GROOT_CONFIG) {
    new appCore(config);
  }

  async install(Vue: App) {
    this.coreCollectors.push(new deviceCollector());

    for (let i = 0; i < this.coreCollectors.length; i++) {
      let dataCollector: collector = this.coreCollectors[i];
      dataCollector.init();
    }
  }
}

export default Groot;

export { useGroot };
