const { logger } = require("./setup");
const fs = require("fs");
logger.clearLog();

fs.open("./foo.txt", () => logger.write("fs open callback"));
