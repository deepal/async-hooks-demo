const { logger } = require('./setup');
logger.clearLog();

Promise.resolve()
    .then(() => logger.write('promise resolve callback'))

logger.write('end')