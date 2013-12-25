var through = require('through');
var JSONB = require('json-buffer');

module.exports = function () {
    var start = new Date();

    function stamp (data) {
        var now = new Date();
        var diff = now - start;
        var step = JSONB.stringify({ time: diff, data: data });
        this.queue(step + '\n');
        start = now;
    };

    process.stdin.pipe(through(stamp)).pipe(process.stdout);
};
