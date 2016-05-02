/* Have the function DivisionStringified(num1,num2) take both parameters being passed,
divide num1 by num2, and return the result as a string with properly formatted commas.
If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). For example: if
num1 is 123456789 and num2 is 10000 the output should be "12,346". */

function DivisionStringified(num1,num2) {

  // divide num1 by num2.
  // round quotient to nearest integer.
  // split quotient into array of individual digits.
  var quotient = Math.round(num1 / num2).toString().split("");

  // keeps count of digits traversed in loop.
  var digitCounter = 0;

  // only numbers that are more than 3 digits long need comma insertion.
  if (quotient.length > 3) {
    // loop through all digits in quotient from end to beginning.
    for (var i = quotient.length - 1; i >= 0; i--) {
      // increment counter for every digit.
      digitCounter++;
      // when counter reaches 3 (3 digits have been traversed)
      if (digitCounter === 3) {
        // concatenate comma with current digit.
        quotient[i] = "," + quotient[i];
        // reset counter.
        digitCounter = 0;
      }
    }
  }

  // return quotient as string.
  return quotient.join("");

}