/* have the function Palindrome(str) take the str parameter being passed and return the string true
if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return
the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string. */

function Palindrome(str) {

  // remove all spaces from "str", as spaces can interfere with checking for palindromes.
  str = str.replace(/ /g, "");
  // create new reversed string for comparison.
  var newStr = str.split("").reverse().join("");

  return str === newStr;

}