/* Have the function CountingMinutesI(str) take the str parameter being passed which will be two times
(each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of
minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am
then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. */

function CountingMinutesI(str) {

  // split string into an array of the starting and ending times.
  str = str.split("-");
  // split within starting and ending times to separate the hour and minutes/ampm.
  str[0] = str[0].split(":");
  str[1] = str[1].split(":");

  // create objects for both starting and ending times.
  // assign values to properties using "str" array.
  var startingTime = {
    hour: +str[0][0],
    minutes: +str[0][1].replace(/[^0-9]/g, ""),
    ampm: str[0][1].replace(/[^a-z]/ig, "")
  };

  var endingTime = {
    hour: +str[1][0],
    minutes: +str[1][1].replace(/[^0-9]/g, ""),
    ampm: str[1][1].replace(/[^a-z]/ig, "")
  };

  // return number of minutes calculated depending upon the situation.
  if (startingTime.ampm === endingTime.ampm) {
    if (startingTime.hour < endingTime.hour) {
      return (endingTime.hour - startingTime.hour) * 60 + (endingTime.minutes - startingTime.minutes);
    } else if (startingTime.hour === endingTime.hour) {
      if (startingTime.minutes < endingTime.minutes) {
        return (endingTime.hour - startingTime.hour) * 60 + (endingTime.minutes - startingTime.minutes);
      } else if (startingTime.minutes > endingTime.minutes) {
        return 1440 + (endingTime.hour - startingTime.hour) * 60 + (endingTime.minutes - startingTime.minutes);
      }
    }
  } else {
    return 720 + (endingTime.hour - startingTime.hour) * 60 + (endingTime.minutes - startingTime.minutes);
  }

}