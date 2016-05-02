/* Have the function SimpleSymbols(str) take the str parameter being passed and determine
if it is an acceptable sequence by either returning the string true or false. The str parameter
will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for
the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false.
The string will not be empty and will have at least one letter. */

function SimpleSymbols(str) {

  // pad "str" with equal signs at beginning and end
  // in order to prevent any potential errors when checking subsequent and previous
  // characters when looping.
  str = "=" + str + "=";

  // loop through "str".
  for (var i = 0; i < str.length; i++) {
    // in the case in which the current character is a letter.
    if (str[i].match(/[a-z]/i)) {
      // if at least the previous or subsequent character is not a "+", automatically
      // return false.
      if (str[i - 1] !== "+" || str[i + 1] !== "+") {
        return false;
      }
    }
  }

  // if loop completes without returning, return true.
  return true;

}