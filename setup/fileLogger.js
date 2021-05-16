const fs = require('fs');

module.exports = class FileLogger {
    constructor({ filePath, userland = false }) {
        this.userland = userland;
        this.filePath = filePath;
    }

    clearLog() {
        fs.writeFileSync(this.filePath, '');
    }

    write(content) {
        const prefix = this.userland ? '[USERLAND]: ' : '';
        fs.writeFileSync(this.filePath, `${prefix}${content}\n`, {flag: 'a'});
    }
}