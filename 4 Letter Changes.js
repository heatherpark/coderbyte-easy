function LetterChanges(str) {

  // create empty array to later be populated with transformed string's characters.
  var newString = [];

  // REPLACE ALL LETTERS WITH SUBSEQUENT LETTERS IN THE ALPHABET

  // loop through "str" array.
  for (var i = 0; i < str.length; i++) {
    // condition in which the current character is any letter from a - y, regardless of case.
    if (str[i].match(/[a-y]/i)) {

      // currentCharCode holds the Unicode value for the current character.
      var currentCharCode = str.charCodeAt(i);

      // because we want to replace the current letter with the subsequent letter in the alphabet, we'll use the
      // Unicode number that's one higher than that of the current character.
      newString.push(String.fromCharCode(currentCharCode + 1));

      // if the current character is "z", regardless of case
    } else if (str[i] === "z" || str[i] === "Z") {

      // push a capital "A" to the "newString" array (as all vowels will later need to be capitalized later anyway).
      newString.push("A");

      // if current character is a non-letter, just push it as is to the "newString" array.
    } else {
      newString.push(str[i]);
    }
  }

  // CAPITALIZE ALL VOWELS

  // loop through "newString" array
  for (var j = 0; j < newString.length; j++) {
    // since the letter "A" was already accounted for in the previous loop, this condition applies if the current character is
    // either an "e", "i", "o", or "u".
    if (newString[j].match(/[eiou]/i)) {

      // capitalize character.
      newString[j] = newString[j].toUpperCase();

    }
  }

  // return "newString" as transformed into a string.
  return newString.join("");

}