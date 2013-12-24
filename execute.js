var fs = require('fs');
var async = require('async');
var byline = require('byline');
var JSONB = require('json-buffer');

module.exports = function (file) {
    var read = fs.createReadStream(file);
    var q = async.queue(function (task, next) {
        var step = JSONB.parse(task);

        setTimeout(function () {
            process.stdout.write(step.data);
            next();
        }, step.time);
    });

    byline(read).on('data', q.push);
};
