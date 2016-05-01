/* Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. */

function FirstReverse(str) {

  return str.split("") // split "str" into an array of individual characters in order to use reverse() method on "str"
            .reverse()
            .join(""); // convert "str" array back into string

}