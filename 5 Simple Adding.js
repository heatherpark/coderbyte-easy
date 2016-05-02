/* Have the function SimpleAdding(num) add up all the numbers from 1 to num.
For the test cases, the parameter num will be any number from 1 to 1000. */

function SimpleAdding(num) {

  // BASE: if num is 1, return 1
  if (num === 1) {
    return 1;

  // otherwise, return num + SimpleAdding(num - 1) to keep adding numbers to "num";
  } else {
    return num + SimpleAdding(num - 1);
  }

}