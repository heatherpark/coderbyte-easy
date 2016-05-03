/* Have the function RectangleArea(strArr) take the array of strings stored in strArr,
which will only contain 4 elements and be in the form (x y) where x and y are both integers,and return the area
of the rectangle formed by the 4 points on a Cartesian grid. The 4 elements will be in arbitrary order.
For example: if strArr is ["(0 0)", "(3 0)", "(0 2)", "(3 2)"] then your program should return 6 because the width
of the rectangle is 3 and the height is 2 and the area of a rectangle is equal to the width * height. */

function RectangleArea(strArr) {

  // the below arrays will hold all x-coordinates and y-coordinates, respectively.
  var x = [];
  var y = [];

  // loop through "strArr"
  for (var i = 0; i < strArr.length; i++) {
    // remove all parentheses.
    strArr[i].replace(/[()]/g, "");
    // make each item its own array of coordinates.
    strArr[i].split(" ");
  }

  // loop through "strArr" again
  for (var j = 0; j < strArr.length; j++) {
    var coords = strArr[j];

    // push coordinates to their respective arrays.
    x.push(coords[0]);
    y.push(coords[0]);
  }

  // sort both coordinate arrays in ascending order.
  x.sort(function(a, b) { return a - b });
  y.sort(function(a, b) { return a - b });

  // subtract least from greatest in both arrays and multiply the differences to find the area.
  return (x[3] - x[0]) * (y[3] - y[0]);

}