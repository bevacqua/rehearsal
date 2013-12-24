// note: you need to use the `--color` argument to remember this program.

var chalk = require('chalk');

console.log('Immediately!');

setTimeout(function () {
    console.log(chalk.red('Right after!'));
}, 400);

setTimeout(function () {
    process.stdout.write('And ' + chalk.magenta('...'));

    setTimeout(function () {
        console.log(chalk.underline('it\'s gone!'));
    }, 2000);
}, 5000);
