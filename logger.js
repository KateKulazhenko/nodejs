// Fabric
// const log = require('logger')(module);

module.exports = function (module) {
  return function () {
      const args = [module.filename].concat([].slice.call(arguments));
      console.log(console, args);
  }
};