const { logger } = require("./setup");
const { AsyncResource, executionAsyncId } = require("async_hooks");
logger.clearLog();

class DBQuery extends AsyncResource {
  constructor(query) {
    super("DBQUERY", {
      triggerAsyncId: executionAsyncId(),
      requireManualDestroy: false, // This defaults to false even if not provided
    });
    this.query = query;
  }

  executeQuery(callback) {
    this.runInAsyncScope(callback, null);
  }
}

let d = new DBQuery();

d.executeQuery(() => {
  logger.write("query executed!");
});

setTimeout(() => {
  // wait until the DBQuery instance is garbage collected...
}, 9999999);
