/* Have the function TimeConvert(num) take the num parameter being passed and
return the number of hours and minutes the parameter converts to (ie. if num = 63
then the output should be 1:3). Separate the number of hours and minutes with a colon. */

function TimeConvert(num) {

  // to get hours, divide "num" by 60 and use floor() method to remove decimals.
  // to get minutes, get modulus of "num" when divided by 60.
  // concatenate numbers with colon and return string.

  return Math.floor(num / 60) + ":" + (num % 60);

}