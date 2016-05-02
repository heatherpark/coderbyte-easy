/* Have the function ExOh(str) take the str parameter being passed and return the string true if
there is an equal number of x's and o's, otherwise return the string false. Only these two letters
will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo"
then the output should return false because there are 6 x's and 5 o's. */

function ExOh(str) {

  // use match() to find all matches for "x" within "str".
  // use match() to find all matches for "o" within "str".
  // if match() returns null, use empty array instead to find length.
  // return boolean for whether match lengths are equal.

  var x = (str.match(/x/g) || []).length;
  var o = (str.match(/o/g) || []).length;

  return x === o;

}