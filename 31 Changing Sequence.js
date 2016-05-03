/* Have the function ChangingSequence(arr) take the array of numbers stored in arr and return the index
at which the numbers stop increasing and begin decreasing or stop decreasing and begin increasing. For
example: if arr is [1, 2, 4, 6, 4, 3, 1] then your program should return 3 because 6 is the last point in
the array where the numbers were increasing and the next number begins a decreasing sequence. The array will
contain at least 3 numbers and it may contains only a single sequence, increasing or decreasing. If there is
only a single sequence in the array, then your program should return -1. Indexing should begin with 0. */

function ChangingSequence(arr) {

  // if "arr" starts off by increasing
  if (arr[1] > arr[0]) {
    // loop from 3 item in "arr" to the end.
    for (var i = 2; i < arr.length; i++) {
      // if current item is less than it's previous item,
      // return the index of the previous item.
      if (arr[i] < arr[i - 1]) {
        return i - 1;
      }
    }
  // do the opposite when "arr" starts off by decreasing.
  } else {
    for (var i = 2; i < arr.length; i++) {
      if (arr[i] > arr[i - 1]) {
        return i - 1;
      }
    }
  }

  // if loops complete without returning, return -1.
  return -1;

}