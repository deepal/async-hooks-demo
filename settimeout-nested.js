const { logger } = require("./setup");
logger.clearLog();

setTimeout(() => {
  logger.write("outer timer callback");
  setTimeout(() => {
    logger.write("inner timer callback");
  }, 1000);
}, 1000);
