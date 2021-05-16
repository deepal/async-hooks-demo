const { logger } = require("./setup");
const fs = require("fs");
logger.clearLog();

fs.readFile("./foo.txt", () => logger.write("fs read callback"));
