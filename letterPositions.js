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

const eqArrays = function (arr1, arr2){

  if ( arr1.length !== arr2.length ){
    return false;
  } else {
    for (let q=0 ; q< arr1.length; q++){
      if ( arr1[q] !== arr2[q]) {
        return false ;
      }
    }
    return true;
  }
}

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Array Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Array Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
/////////
console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("hello").e, [1]);
module.exports = letterPositions;
