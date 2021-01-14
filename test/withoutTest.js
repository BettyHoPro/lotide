///////////// from Compass

//--- without function: (  source array ,  itemsToRemove array ) ===> source arr[q] not in itemsToRemove arr
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

//// test outcome
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]) 
assertArraysEqual(without([ "1" , 2, 4 ], [ "1","4" ]), [ 2,4 ]) 
assertArraysEqual(without([1, 2, 3], [ 3, 7 ]), [1, 2 ]) 
