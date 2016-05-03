/* Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str.
For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number. */

function DashInsert(str) {

  // convert "str" to string in order to be able to split into array of individual numbers.
  str = str.toString().split("");

  // loop through "str" from beginning to penultimate item to prevent out of bounds error.
  for (var i = 0; i < str.length - 1; i++) {
    // if current item is odd AND subsequent item is odd, concatenate current item with "-".
    if (str[i] % 2 !== 0 && str[i + 1] % 2 !== 0) {
      str[i] = str[i] + "-";
    }
  }

  // return "str" as string.
  return str.join("");

}