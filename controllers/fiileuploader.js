var fs = require("fs");
module.exports = function () {
    this.Multi_upload = async function (file) {
        fs.rename(file.path, __dirname + '/../uploads/' + file.name, function () {
            console.log({ success: true, message: 'File uploaded successfully', fileName: __dirname + '../uploads/' + file.name });
        });
    }
}