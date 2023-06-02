export type ENVIRONMENT = "development" | "production" | string;

export type IS_DEBUG = boolean;

export interface SEND_CONFIG {
  api: string;
}

export interface GROOT_CONFIG {
  env: ENVIRONMENT;
  debug?: IS_DEBUG;
  sendConfig: SEND_CONFIG;
  customPaylod?: object;
}

export type UUID = string;
