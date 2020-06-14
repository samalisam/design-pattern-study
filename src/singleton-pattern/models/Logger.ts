class Logger {
  private static instance: Logger;

  private constructor() {
    console.log('create logger instance');
  }

  static GET_INSTANCE(): Logger {
    if (Logger.instance == null) {
      Logger.instance = new Logger();
    }

    return Logger.instance;
  }

  write(logMessage: string): void {
    console.log(logMessage);
  }
}

export { Logger };
