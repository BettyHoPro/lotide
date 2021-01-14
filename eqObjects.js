const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  if ( key1.length !== key2.length ) {
    return false;
  }
  // console.log(key1);
  // console.log(key2);
  for ( let key of key1 ){
    let kInOb1 = object1[key];
    let kInOb2 = object2[key];
    if (Array.isArray(kInOb1)) {
      if (!Array.isArray(kInOb2 ) ) {
        return false;
      } else if (!eqArrays(kInOb1, kInOb2)) {
        return false;
      }
    } else if (kInOb1 !== kInOb2) {
      return false;
    }
  }
  return true;
};


module.exports=eqObjects ;
