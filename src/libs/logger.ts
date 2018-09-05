const LoggerType = ["info", "warn", "error"];

interface ILogger {
  [key: string]: any;
}

const Logger: ILogger = {};

LoggerType.forEach((type) => {
  Logger[type] = (message: string, ...params: Array<any>) => {
    console[type].call(null, message, ...params);
  };
});

export { Logger };
