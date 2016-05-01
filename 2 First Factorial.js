/* Have the function FirstFactorial(num) take the num parameter being passed and return
the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)).
For the test cases, the range will be between 1 and 18. */

/*
SOLUTION
Use recursion (having the function call itself), as finding the factorial of a number is essentially
multiply that number by the factorials of the numbers that come before it.  Have the function return 1
when "num" reaches 1 in order to prevent perpetual looping.
*/


function FirstFactorial(num) {

  // BASE CASE:
  if (num === 1) {
    return 1;
  }

  return num * FirstFactorial(num - 1);

}