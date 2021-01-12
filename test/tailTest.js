const assert = require('chai').assert;
const tail=require('../tail');
describe("#tail", () => {
  it("returns 1 for [1, 2, 3]", () => {
    console.log(tail([1, 2, 3]));
    assert.deepEqual(tail([ 1,2, 3]),[2,3]);
  });
});

console.log(tail([1, 2, 3]));