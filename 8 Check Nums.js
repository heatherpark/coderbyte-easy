/* have the function CheckNums(num1,num2) take both parameters being passed and return
the string true if num2 is greater than num1, otherwise return the string false. If the parameter
values are equal to each other then return the string -1. */

function CheckNums(num1,num2) {

  // if num1 is equal to num2, return -1.
  // otherwise, return whether or not num2 is greater
  // than num1 (JS will coerce into boolean form).
  return num1 === num2 ? -1 : (num2 > num1);

}