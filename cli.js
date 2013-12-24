var api = require('./api.js');
var scenario = process.argv[2];
if (scenario) {
    api.execute(scenario);
} else {
    api.rehearse();
}
