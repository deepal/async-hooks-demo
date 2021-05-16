const http = require("http");
const { logger } = require("./setup");
logger.clearLog();

const options = {
  host: "example.com",
  port: 80,
  path: "/",
};

const req = http.get(options);
req.on('response', (res) => {
    logger.write(`received status code: ${res.statusCode}`)
})

req.end();
