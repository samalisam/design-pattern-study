import { Logger } from './Logger';

const logger1 = Logger.GET_INSTANCE();
logger1.write('log message');

const logger2 = Logger.GET_INSTANCE();
logger2.write('log next message');
