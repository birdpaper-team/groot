export class Logger {
  private static instance: Logger;

  info(params: any) {
    console.info("[ Groot ]", params);
  }

  warn(params: any) {
    console.warn("[ Groot ]", params);
  }

  error(params: any) {
    console.error("[ Groot ]", params);
  }

  public static install(): Logger {
    if (Logger.instance) {
      return Logger.instance;
    }

    const _log = new Logger();
    Logger.instance = _log;

    return _log;
  }
}

export default Logger.install();
