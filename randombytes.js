const crypto = require("crypto");
const { logger } = require("./setup");
logger.clearLog();

crypto.randomBytes(10, (err, buf) => {
    logger.write(`got some random stuff: ${buf.toString()}`)
});
