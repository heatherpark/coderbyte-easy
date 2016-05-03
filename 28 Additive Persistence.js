/* Have the function AdditivePersistence(num) take the num parameter being passed which will always
be a positive integer and return its additive persistence which is the number of times you must add
the digits in num until you reach a single digit. For example: if num is 2718 then your program should
return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9. */

function AdditivePersistence(num) {
  // place counter in outer function to avoid interference by recursive function and set initial value to 0.
  var counter = 0;

  function inner(num) {
    // keeps running total of addition of digits in "num".
    var sum = 0;

    // our goal is for the length of "num" to reach 1.
    // once that happens, return "counter".
    if (num.toString().length === 1) {
      return counter;
    // otherwise, appropriately format "num" to be traversed.
    } else {
      num = num.toString().split("");

      // loop through "num" and add each item to "sum".
      for (var i = 0; i < num.length; i++) {
        sum += +num[i];
      }

      // once loop is complete, add 1 to "counter".
      counter++;

      // then, run the inner() function again, this time passing "sum" as its argument.
      return inner(sum);
    }
  }

  return inner(num);

}