/* Have the function LetterCapitalize(str) take the str parameter being passed and
capitalize the first letter of each word. Words will be separated by only one space. */

function LetterCapitalize(str) {

  // split "str" into an array of words in order to easily traverse over each word.
  str = str.split(" ");

  // "newStr" will hold the newly transformed words.
  var newStr = [];

  // loop over each word in "str".
  for (var i = 0; i < str.length; i++) {
    // capitalize first letter of word and contatenate with rest of word.
    // push newly capitalized word to "newStr" array.
    newStr.push(str[i].charAt(0).toUpperCase() + str[i].slice(1));
  }

  // return "newStr" once it's been converted back to a string.
  return newStr.join(" ");

}