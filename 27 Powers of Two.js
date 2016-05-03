/* Have the function PowersofTwo(num) take the num parameter being passed which will be an integer and return
the string true if it's a power of two. If it's not return the string false. For example if the input is 16
then your program should return the string true but if the input is 22 then the output should be the string false. */

/* STRATEGY
When a number is a power of 2, it means that the number 2 was multiplied a certain number of times to equal that number.
Thus, continually dividing a number that is a power of 2 by 2 means that the quotient will eventually be 1.
Once it reaches 1, we want to return the function as true.  However, if the quotient never equals 1 and eventually is
less than 1, that means it "num" is not a power of two and the function needs to be returned as false. */

function PowersofTwo(num) {

  // find quotient of "num" when divided by 2.
  var quotient = num / 2;

  // check if quotient is less than 1 and if so, return false.
  if (quotient < 1) {
    return false;
  // check if quotient is 1 and if so, return true.
  } else if (quotient === 1) {
    return true;
  } else {
  // if neither condition applies, run PowersofTwo and pass to it the quotient so it can be divided by 2.
    return PowersofTwo(quotient);
  }

}
