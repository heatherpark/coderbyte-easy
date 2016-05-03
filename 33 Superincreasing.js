/* Have the function Superincreasing(arr) take the array of numbers stored in arr and determine
if the array forms a superincreasing sequence where each element in the array is greater than
the sum of all previous elements. The array will only consist of positive integers.
For example: if arr is [1, 3, 6, 13, 54] then your program should return the string "true" because
it forms a superincreasing sequence. If a superincreasing sequence isn't formed, then your program
should return the string "false" */

function Superincreasing(arr) {

  // assign "sum" the initial value of the first item in "arr".
  var sum = arr[0];

  // loop through "arr", starting from second item.
  for (var i = 1; i < arr.length; i++) {
    // if current item is greater than "sum"
    // add current item to "sum" and move on with loop.
    if (arr[i] > sum) {
      sum += arr[i];
    // otherwise, return false.
    } else {
      return false;
    }
  }

  // if loop completes without returning, return true.
  return true;

}

