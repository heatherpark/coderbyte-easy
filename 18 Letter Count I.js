/* Have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters.
For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's.
If there are no words with repeating letters return -1. Words will be separated by spaces. */

function LetterCountI(str) {

  str = str.split(" ");   // convert to array of individual words.

  // "letterCount" will hold all words in "str", along with the counts for each letter in each word.
  var letterCount = {};

  // POPULATING letterCount OBJECT

  // loop through each word in "str".
  for (var i = 0; i < str.length; i++) {
    var word = str[i];
    // each word will be a property in "letterCount" and will hold its own object.
    letterCount[word] = {};

    // loop through each letter in each word.
    for (var j = 0; j < word.length; j++) {
      var letter = word[j];

      // each letter will become its own property in the word object.
      // if letter has not yet been encountered, create a property for
      // it and set its value to 1.
      if (!letterCount[word][letter]) {
        letterCount[word][letter] = 1;
      // otherwise, increment that value by 1.
      } else {
        letterCount[word][letter]++;
      }
    }
  }

  // "maxCount" will keep track of each word's highest number of repeated letters.
  var maxCount = {};

  // POPULATING maxCount OBJECT

  // loop through each word in "letterCount" object.
  for (var word in letterCount) {
    // set each word as property name for "maxCount" and set initial value to 0.
    maxCount[word] = 0;

    // loop through each object within "letterCount" object (letters and their tallies).
    for (var tally in letterCount[word]) {
      // find and set largest letter count by comparing maxCount[word] and the tallies found in "letterCount".
      if (letterCount[word][tally] > maxCount[word]) {
        maxCount[word] = letterCount[word][tally];
      }
    }
  }

  // object that holds word to be returned.
  var result = {
    word: "",
    tally: 1
  };

  // loop through "maxCount" object.
  for (var word in maxCount) {
    // determine word with greatested repeated letter count by comparing to property/value pairs in "result" object.
    if (maxCount[word] > result.tally) {
      result.word = word;
      result.tally = maxCount[word];
    }
  }

  // return "word" in "result" object OR -1 if there were no words with repeating letters.
  return result.word || -1;

}