/* Have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic"
if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern.
If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference
between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied
by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54].
Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. */

function ArithGeo(arr) {

  // sort "arr" items in ascending order.
  arr.sort(function(a, b) {return a - b;});

  // this function will evaluate whether "arr" contains an ARITHMETIC pattern.
  function arithmetic(array) {
    // the difference between the first and second items in "arr" will serve as
    // the basis for comparison when examining the differences between other item
    // pairs in "arr".
    var arithVal = arr[1] - arr[0];

    // loop through "arr", starting on the second item and up to the penultimate item.
    for (var i = 1; i < array.length - 1; i++) {
      // if the difference between current and subsequent item is not equal to "arithVal"...
      if (array[i + 1] - array[i] !== arithVal) {
        // arithmetic() function returns false.
        return false;
      }
    }

    // if loop completes without returning false, arithmetic() will return "Arithmetic".
    return "Arithmetic";
  }

  // this function will evaluate whether "arr" contains a GEOMETRIC pattern.
  function geometric(array) {
    // the quotient of the first and second items in "arr" will serve as
    // the basis for comparison when examining the quotients between other item
    // pairs in "arr".
    var geoVal = arr[1] / arr[0];

    // check items in a similar fashion to method in arithmetic() function.
    for (var i = 1; i < array.length - 1; i++) {
      if (array[i + 1] / array[i] !== geoVal) {
        return false;
      }
    }

    // if loop completes without returning false, arithmetic() will return "Geometric".
    return "Geometric";
  }

  // ArithGeo() will ultimately return a string or -1, depending on what its
  // inner arithmetic() and geometric() functions return.
  return (arithmetic(arr) || geometric(arr) || -1);

}