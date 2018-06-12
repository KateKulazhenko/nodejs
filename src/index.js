const db = require('./../db/ru');

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
  console.log(db.getPhrase + ', ' + who.name);
};

console.log('user.js is requires!');

exports.User = User;