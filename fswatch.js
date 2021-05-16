const { logger } = require("./setup");
const fs = require("fs");
logger.clearLog();

fs.watch("./tmp", () =>
  logger.write("fs watch callback called.")
);
