const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const without = (source, itemsToRemove) => {
  let answer = []
  for (let a = 0; a < source.length; a++) {
    let add = true;
    for (let w = 0; w < itemsToRemove.length; w++) {
     ( source[a] === itemsToRemove[w] ) && (add = false ); // if condition
    }
    add && ( answer.push(source[a]));
  }
  return answer;
};

module.exports = without;

