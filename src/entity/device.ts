import { BROWSER_TYPE, DEVICE_TYPE } from "../types/device";

/** 设备采集数据 */
export default class deviceData {
  /** 设备类型 */
  deviceType: DEVICE_TYPE;

  /** Agent 信息 */
  userAgent: string;

  /** 浏览器信息 */
  browser: BROWSER_TYPE;
}
