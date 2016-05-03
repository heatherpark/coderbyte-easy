/* Have the function MeanMode(arr) take the array of numbers stored in arr and return 1
if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return
1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers,
and will not contain more than one mode. */

function MeanMode(arr) {

  // separate tasks into respective functions.

  function findMode(arr) {
    // "counts" is an object that keeps track of each item in "arr" and how many times they occur.
    var counts = {};

    // loop through all items in "arr".
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];

      // if the current item is not yet found in "counts" add it and set its initial value to 1.
      // otherwise, simply increment its value.
      (!counts[item]) ? counts[item] = 1 : counts[item]++;
    }

    // this object will eventually hold the mode of "arr", so its initial values are just set to null and 0.
    var mode = {
      number: null,
      count: 0
    };

    // use for in loop to loop through all properties in "counts" object.
    for (var n in counts) {
      // get mode by comparing the count of each property in "counts" to the value of count in "mode".
      if (counts[n] > mode["count"]) {
        mode["number"] = n;
        mode["count"] = counts[n];
      }
    }

    // return the mode in number form to be able to compare later to mean.
    return +mode["number"];

  }

  function findMean(arr) {
    // find sum of all items in "arr" using reduce() method.
    var sum = arr.reduce(function(total, currentValue) {
      return total + currentValue;
    });

    // divide sum by the length of the array in order to get the mean.
    return sum / arr.length;

  }

  // run both functions.
  // if both return equal values, have MeanMode() return 1.
  // otherwise, return 0.
  return (findMode(arr) === findMean(arr)) ? 1 : 0;

}