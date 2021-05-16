const { logger } = require("./setup");
const { AsyncResource, executionAsyncId } = require("async_hooks");
logger.clearLog();

class DBQuery extends AsyncResource {
  constructor(query) {
    super("DBQUERY", {
      triggerAsyncId: executionAsyncId(),
      requireManualDestroy: true,
    });
    this.query = query;
  }

  executeQuery(callback) {
    this.runInAsyncScope(callback, null);
  }

  close() {
    this.emitDestroy();
  }
}

const dbquery = new DBQuery();
dbquery.executeQuery(() => {
  logger.write("query executed!");
});

// Wait
setTimeout(() => {
  dbquery.close();
}, 5000);
