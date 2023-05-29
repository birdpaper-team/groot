import { App } from "vue";
import useGroot from "./useGroot";
import { GrootConfig } from "../types/index";

class Groot {
  public postUrl: string = "";

  constructor(config: GrootConfig) {
    this.postUrl = config.postUrl;
  }

  install(Vue: App) {
    console.log("[ install ]-8", this.postUrl);
  }
}

export default Groot;

export { useGroot };
