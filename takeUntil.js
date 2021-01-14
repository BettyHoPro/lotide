const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");
//////////// this /////////
const takeUntil = (array, callback) => {
  const result = [];
  for (let qInArr of array) {
    if ( callback(qInArr)) {
      return result;
    } else {
      result.push(qInArr);
    }
  }
  return result;
}


module.exports = takeUntil;