const { executionAsyncId } = require("async_hooks");
const { logger } = require("./setup");
logger.clearLog();

let count = 0;
let interval = null;
interval = setInterval(() => {
  count += 1;
  logger.write(`callback executed`);
  if (count >= 5) {
    clearInterval(interval);
  }
}, 1000);
