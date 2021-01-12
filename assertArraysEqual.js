const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Array Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Array Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports=assertArraysEqual ;