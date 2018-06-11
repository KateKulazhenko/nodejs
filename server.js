const user = require('./src');
function run() {
    const name1 = new user.User('Jhone');
    const name2 = new user.User('Poul');

    name1.hello(name1);
}

if (module.parent) {
    exports.run = run
} else {
    run();
}