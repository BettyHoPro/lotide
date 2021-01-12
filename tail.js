//const assertEqual = require('./assertEqual');
const tail = function (array) {
  return array.slice(1);
  // array.shift();
  // return array;
};

module.exports = tail;
