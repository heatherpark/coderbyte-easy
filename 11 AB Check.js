/* Have the function ABCheck(str) take the str parameter being passed and return the
string true if the characters a and b are separated by exactly 3 places anywhere in the string
at least once (ie. "lane borrowed" would result in true because there is exactly three characters
between a and b). Otherwise return the string false. */

function ABCheck(str) {

  // the pattern we're looking for can be expressed with regular expressions.
  // the periods denote characters of any kind.
  // we're looking for two patterns, one in which "a" comes first" and the other in which "b" comes first.
  var pattern = /(a...b|b...a)/;

  // to see if "str" contains the pattern we're looking for, use the test() method.
  return pattern.test(str);

}