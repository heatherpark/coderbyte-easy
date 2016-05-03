/* Have the function OffLineMinimum(strArr) take the strArr parameter being passed which will be an array
of integers ranging from 1...n and the letter "E" and return the correct subset based on the following rules.
The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers
and the E means take out the smallest integer currently in the whole set. When finished, your program should
return that new set with integers separated by commas. For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"]
then your program should return 4,1,5. */

function OffLineMinimum(strArr) {

  // "numbers" will hold all numbers in "strArr".
  var numbers = [];
  // "result" will be returned as a string with commas at end of function.
  var result = [];

  // loop through all items in "strArr".
  for (var i = 0; i < strArr.length; i++) {
    // if item is not "E" (a number)
    if (strArr[i] !== "E") {
      // push item as its number form (in order to accurately calculate mininmum later) to "numbers".
      numbers.push(+strArr[i]);
    // if item is "E"
    } else {
      var min = Math.min.apply(null, numbers);
      // push the current minimum of "numbers" to "result" array.
      result.push(min);
      // splice current minimum from "numbers".
      numbers.splice(numbers.indexOf(min), 1);
    }
  }

  return result.join(",");

}
