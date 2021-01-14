const assertEqual = require("./assertEqual");

const findKey = ( object, callback ) => {
  for ( let q in object )
    if ( callback (object[q])){
      return q;
    }
 }

module.exports = findKey;