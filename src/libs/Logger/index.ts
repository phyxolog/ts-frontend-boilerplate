type LoggerLevel = "info" | "warn" | "error";

type LoggerPayloadType = any[];

type LoggerType = {
  [key in LoggerLevel]: (
    primaryMessage: string,
    ...payload: LoggerPayloadType
  ) => void
};

interface ILogger extends LoggerType {}

class Logger implements ILogger {
  public info(primaryMessage: string, ...payload: LoggerPayloadType): void {
    this.emitMessage("info", primaryMessage, payload);
  }

  public warn(primaryMessage: string, ...payload: LoggerPayloadType): void {
    this.emitMessage("warn", primaryMessage, payload);
  }

  public error(primaryMessage: string, ...payload: LoggerPayloadType): void {
    this.emitMessage("error", primaryMessage, payload);
  }

  private emitMessage(
    level: LoggerLevel,
    primaryMessage: string,
    payload: LoggerPayloadType
  ): void {
    console[level].call(null, primaryMessage, ...payload);
  }
}

export default new Logger();
