import collector from "../../entity/collector";
import deviceData from "../../entity/device";
import { CACHE_KEY } from "../../types/cache";
import { DEVICE_TYPE } from "../../types/device";
import cache from "../../utils/cache";
import { getUserAgentData } from "../../utils/common";
import logger from "../../utils/log";

/**
 * 设备采集器
 */
export default class deviceCollector extends collector {
  public deviceData: deviceData = new deviceData();

  /**
   * 获取设备类型
   * @returns {DEVICE_TYPE} 设备类型
   */
  public getDeviceType(): DEVICE_TYPE {
    try {
      let type: DEVICE_TYPE = DEVICE_TYPE.unknown;

      const userAgentData = getUserAgentData();
      if (userAgentData) {
        // One of the following strings: "Android", "Chrome OS", "Chromium OS", "iOS", "Linux", "macOS", "Windows", or "Unknown".
        type = userAgentData.platform;
        return type;
      }

      const UserAgent: string = navigator.userAgent.toLowerCase();
      const navigatorPlatform: string = navigator["platform"].toLowerCase();

      if (["win32", "windows", "windows"].includes(navigatorPlatform) || UserAgent.indexOf("windows") > -1) {
        type = DEVICE_TYPE.Windows;
      }
      if (["mac68K", "macPPC", "macintosh", "macintel", "mac"].includes(navigatorPlatform)) {
        type = DEVICE_TYPE.Mac;
      }
      if (UserAgent.includes("iphone")) {
        type = DEVICE_TYPE.iPhone;
      }
      if (UserAgent.includes("ipod")) {
        type = DEVICE_TYPE.iPod;
      }
      if (UserAgent.includes("ipad")) {
        type = DEVICE_TYPE.iPad;
      }
      if (UserAgent.includes("android")) {
        type = DEVICE_TYPE.Android;
      }

      return type;
    } catch (error) {
      return DEVICE_TYPE.unknown;
    }
  }

  /**
   * 获取 UserAgent 信息
   * @returns string
   */
  public getUserAgent = (): string => {
    try {
      return navigator.userAgent;
    } catch (error) {
      return "";
    }
  };

  public getBrowserInfo = () => {};

  public install() {
    logger.info(`[ DeviceCollector ] - Installed`);
    this.deviceData.deviceType = this.getDeviceType();
    this.deviceData.userAgent = this.getUserAgent();

    // cache.save(CACHE_KEY.Device, this.deviceData, true);
  }
}
