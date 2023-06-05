import collector from "../../entity/collector";
import { DEVICE_TYPE } from "../../types/device";
import logger from "../../utils/log";

/**
 * 设备采集器
 */
export default class deviceCollector extends collector {
  /**
   * 获取设备类型
   * @returns {DEVICE_TYPE} 设备类型
   */
  public getDeviceType(): DEVICE_TYPE {
    const userAgentData = navigator["userAgentData"];
    const { platform } = userAgentData;
    return platform;
  }

  public install() {
    logger.info(`[ DeviceCollector ] - Installed`);
    // const data = navigator;
    console.log("[  ]-47", this.getDeviceType());
  }
}
