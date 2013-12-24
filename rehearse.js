var through = require('through');
var JSONB = require('json-buffer');

module.exports = function () {
    var start = new Date();
    var stamp = through(function (data) {
        var now = new Date();
        var diff = now - start;
        start = now;

        this.queue(data);
    });
    process.stdin.pipe(process.stdout);
};
