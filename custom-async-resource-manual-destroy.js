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

let d = new DBQuery();
d.executeQuery(() => {
  logger.write("query executed!");
  d.close();
});

// Wait
setTimeout(() => {}, 99999);
