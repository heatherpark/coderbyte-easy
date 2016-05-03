/* Have the function NumberSearch(str) take the str parameter, search for all the numbers in the string,
add them together, then return that final number. For example: if str is "88Hello 3World!" the output should be 91.
You will have to differentiate between single digit numbers and multiple digit numbers like in the example above.
So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol. */

function NumberAddition(str) {

  // replace any nonnumber in "str" with a space.
  // then, split "str" into array, using space as separator.
  str = str.replace(/[^0-9]/g, " ").split(" ");

  // "numbers" will be populated with nubmers from "str".
  var numbers = [];

  // loop through "str".
  for (var i = 0; i < str.length; i++) {
    // if item is not a space, push its number form to "numbers".
    if (!str[i].match(/ /)) {
      numbers.push(+str[i]);
    }
  }

  // return value returned by using reduce() method on "numbers" -- the total.
  return numbers.reduce(function(total, currentItem) {
    return total + currentItem;
  });

}

// replace all letters with spaces in "str"
// convert "str" to an array, using spaces as separators
// loop through "str" and push only numbers to a new array
// find sum of items in new array using reduce()