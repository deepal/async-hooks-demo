const { logger } = require('./setup');
logger.clearLog();

process.stdin.on('data', (data) => {
    logger.write(`received: ${data}`)
});
