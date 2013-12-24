var scenario = process.argv[2];
if (scenario) {
    require('./execute.js')(scenario);
} else {
    require('./rehearse')();
}
