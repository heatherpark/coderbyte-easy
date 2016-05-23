/* Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
If there are two or more words that are the same length, return the first word from the string with that length.
Ignore punctuation and assume sen will not be empty. */

function LongestWord(sen) {

  // create charCount variable to keep track of longest char count and set to zero.
  var charCount = 0;

  // create longestWord variable to keep track of current longest word and set to empty string.
  var longestWord = "";

  // remove all punctuation using regexp.
  // this will remove any characters that aren't letters, apostrophes, or spaces.
  sen = sen.replace(/[^a-z' ]/ig, "");

  // convert sen into array of words to allow a loop to traverse over each word.
  sen = sen.split(" ");

  // loop through sen
  for (var i = 0; i < sen.length; i++) {
    // if the current word's length is greater than the current value of charCount.
    if (sen[i].length > charCount) {
      // set charCount equal to current word's length.
      charCount = sen[i].length;
      // set longestWord to current word.
      longestWord = sen[i];
    }
  }

  return longestWord;

}