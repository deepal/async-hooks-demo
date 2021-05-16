const { logger } = require('./setup');
logger.clearLog();

require('net').createServer((conn) => {
    logger.write('client connected!')
}).listen(8080);