const http = require("http");
const { logger } = require("./setup");
logger.clearLog();

const server = http.createServer((req, res) => {
  res.writeHead(200).end();
});

server.listen(9090)