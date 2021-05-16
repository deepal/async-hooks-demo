const { logger } = require("./setup");
logger.clearLog();

setTimeout(() => {
  logger.write("timer callback");
}, 1000);
