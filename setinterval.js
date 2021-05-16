const { logger } = require("./setup");
logger.clearLog();

let count = 0;
let interval = null;
interval = setInterval(() => {
  logger.write(`callback executed`);
  if (++count >= 3) {
    clearInterval(interval);
  }
}, 1000);
