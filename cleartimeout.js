const { logger } = require("./setup");
logger.clearLog();

clearTimeout(setTimeout(() => {
  logger.write("timer callback");
}, 1000));
