/* Have the function SwapCase(str) take the str parameter and swap the case of each character.
For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are. */

function SwapCase(str) {

  // split "str" into an array of individual characters.
  str = str.split("");

  // loop through each character in "str".
  for (var i = 0; i < str.length; i++) {
    // check case of each character and transform to opposite case.
    if (str[i] === str[i].toUpperCase()) {
      str[i] = str[i].toLowerCase();
    } else {
      str[i] = str[i].toUpperCase();
    }
  }

  // return "str" as string.
  return str.join("");

}