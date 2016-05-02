/* Have the function VowelCount(str) take the str string parameter being passed and
return the number of vowels the string contains (ie. "All cows eat grass" would return 5).
Do not count y as a vowel for this challenge. */

function VowelCount(str) {

  // counter variable to keep track of number of vowels found.
  var vowelCount = 0;
  // regular expression defining the vowels we are looking for.
  var vowels = /(a|e|i|o|u)/;

  // loop through "str".
  for (var i = 0; i < str.length; i++) {
    // test each character to see if it is a vowel.
    if (vowels.test(str[i])) {
      // if so, increment "vowelCount".
      vowelCount++;
    }
  }

  return vowelCount;

}