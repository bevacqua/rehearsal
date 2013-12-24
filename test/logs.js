console.log('Immediately!');

setTimeout(function () {
    console.log('Right after!');
}, 400);

setTimeout(function () {
    process.stdout.write('And...');

    setTimeout(function () {
        console.log('it\'s gone!');
    }, 2000);
}, 5000);
