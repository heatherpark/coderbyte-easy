/* Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers,
respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty
and will contain at least 2 numbers. It can get tricky if there's just two numbers! */

function SecondGreatLow(arr) {

  // use filter() method to remove duplicates from "arr".
  arr = arr.filter(function(item, index) {
    // filter on the condition that value returned by indexOf() of an item is equal to the item's index.
    return array.indexOf(item) === index;
  });

  // sort "arr" in ascending order.
  arr = arr.sort(function(a, b) { return a - b; });

  // different lengths for "arr" will result in different strings being returned.
  if (arr.length === 2) {
    return arr[1] + " " + arr[0];
  } else if (arr.length === 3) {
    return arr[1] + " " + arr[1];
  } else {
    return arr[1] + " " + arr[arr.length - 2];
  }

}