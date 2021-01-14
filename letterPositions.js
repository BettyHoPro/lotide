const letterPositions = (sentence) => {
  const results = {};
//   // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    let str = sentence[i];
    ( str in results) ? ( results[str].push(i) ) : ( results[str] = [i] );
  }
  return results;
};
/////////
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

module.exports = letterPositions;
