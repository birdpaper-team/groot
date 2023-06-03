import { COLLECTOR_TYPE } from "../types/collectorType";

export default class collectorData {
  /** 采集类型 */
  type?: COLLECTOR_TYPE;

  /** 数据包 */
  data: unknown;

  /** 时间戳 */
  timestamp?: number;
}
