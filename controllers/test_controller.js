var os = require('os');
module.exports = function () {
    this.getOSInfo = async function () {
        return {
            cpus: os.cpus(),
            totalmem: os.totalmem(),
            freemem: os.freemem(),
        };
    }
}