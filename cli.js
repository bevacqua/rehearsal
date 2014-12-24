var api = require('./api.js');
if (process.argv[2] === '-h' || process.argv[2] === '--help' || process.argv[2] === 'help') {
  console.log('Usage:');
  console.log('command | rehearsal > scenario')
  console.log('rehearsal scenario')
} else {
  var scenario = process.argv[2];
  if (scenario) {
      api.execute(scenario);
  } else {
      api.rehearse();
  }
}
