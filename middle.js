//const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");
middle = ( array ) => { 
  let arrMiddle = [ ];
  let midNum = array.length/2;
  let midNumOdd=Math.floor(midNum);
  
  if ( array.length <= 2 ) {  
    arrMiddle=[];
  }else if ( array.length % 2 === 1 ){
   arrMiddle.push(array[midNumOdd]);
  }else{
   arrMiddle.push(array[midNum-1]);
   arrMiddle.push(array[midNum]);
  }
  return arrMiddle;
}
module.exports = middle;


