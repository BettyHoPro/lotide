const assertEqual = require("./assertEqual");
//////////// this time 
// string ---> replace：Format Ob items

const countLetters = (string) => {
  string = string.replace(/\s+/g, '');
  let obBox = {}
  for (let item of string) {
    obBox[item] ?  ( obBox[item] += 1 ): ( obBox[item] = 1 ) ;
  }
  return obBox;
};


module.exports = countLetters;


