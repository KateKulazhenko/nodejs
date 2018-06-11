const log = require('logger')(module);
const db = require('./../db/ru');
db.connect();

const User = require('./src');

function run() {
    const name1 = new user.User('Jhone');
    const name2 = new user.User('Poul');

    name1.hello(db.getPhrase('Run successful'));
}

if (module.parent) {
    exports.run = run
} else {
    run();
}