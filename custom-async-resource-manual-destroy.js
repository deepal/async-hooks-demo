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

  destroy() {
    this.emitDestroy();
  }
}

const dbquery = new DBQuery();
dbquery.executeQuery(() => {
  logger.write("query executed!");
});
dbquery.destroy();

// Wait until the resource is manually destroyed
setTimeout(() => {}, 9999999);
