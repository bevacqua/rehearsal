module.exports = {
    execute: function (scenario) {
        require('./execute.js')(scenario);
    },
    rehearse: function () {
        require('./rehearse')();
    }
};
