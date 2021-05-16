const FileLogger = require('./fileLogger');
const AsyncWatcher = require('./asyncWatcher');

const fsLogger = new FileLogger({ filePath: './log' });
fsLogger.clearLog();
const INDENT_OUTPUT = true;

const watcher = new AsyncWatcher();

const indent = (length = 0) => {
    if (!INDENT_OUTPUT) return '';
    const indentChar = '    ';
    return indentChar.repeat(length)
}

const asyncMap = new Map();

watcher
    .setupInitHook()
    .setupBeforeHook()
    .setupAfterHook()
    .setupDestroyHook()
    .setupPromiseResolveHook()
    .start()
    .on('INIT', ({ asyncId, type, triggerAsyncId, resource, executionAsyncId }) => {
        asyncMap.set(asyncId, triggerAsyncId);
        fsLogger.write(`${indent(asyncMap.get(asyncId))}(asyncId: ${asyncId}) INIT (${type}) (triggerAsyncId=${triggerAsyncId}) (resource=${resource.constructor.name})`)
    })
    .on('BEFORE', ({ asyncId, executionAsyncId }) => {
        fsLogger.write(`${indent(asyncMap.get(asyncId))}(asyncId: ${asyncId}) BEFORE`);
    })
    .on('AFTER', ({ asyncId, executionAsyncId }) => {
        fsLogger.write(`${indent(asyncMap.get(asyncId))}(asyncId: ${asyncId}) AFTER`);
    })
    .on('DESTROY', ({ asyncId, executionAsyncId }) => {
        fsLogger.write(`${indent(asyncMap.get(asyncId))}(asyncId: ${asyncId}) DESTROY`);
    })
    .on('PROMISE_RESOLVE', ({ asyncId, executionAsyncId }) => {
        fsLogger.write(`${indent(asyncMap.get(asyncId))}(asyncId: ${asyncId}) PROMISE_RESOLVE`);
    })

module.exports = { logger: fsLogger }