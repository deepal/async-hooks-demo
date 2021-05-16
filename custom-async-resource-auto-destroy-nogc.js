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

const dbquery = new DBQuery();
dbquery.executeQuery(() => {
  logger.write("query executed!");
});

setTimeout(() => {
  // Keep a reference to dbquery so that it won't be garbage collected
  console.log(dbquery.asyncId())
}, 9999999);
