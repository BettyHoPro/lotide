//const assertEqual = require('./assertEqual');
const tail = function (array) {
  array.slice(1);
  return array;
};

module.exports = tail;
