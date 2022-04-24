// Write a function that takes in a 2D array of meeting times, where each sub array contains 2 integers representing a meeting start and end time. Return a new 2D array such that overlapping meeting blocks are condensed into combined meeting blocks

var mergeMeetingTimes = function(arr) {
  var arrCopy = JSON.parse(JSON.stringify(arr));
  // First, sort array in ascending order.
  var sortedArr = arrCopy.sort((a, b) => a[0] - b[0]);

  // Variable to be returned. Initialized with a value of the first pair in the sorted array.
  var result = [sortedArr[0]];
  console.log(result);

  for (var i = 1; i < sortedArr.length; i++) {
    // We will compare the last meeting, i.e. the meeting with the latest end time, to the meeting at the current iteration of the loop.
    var lastMeeting = result[result.length - 1];
    console.log(`Current value of lastMeeting: ${lastMeeting}`);
    var currentMeeting = sortedArr[i];
    console.log(`Current value of currentMeeting: ${currentMeeting}`);

    // First: Checks of the END of the first meeting time is GREATER than the START time of the current meeting.
    if (lastMeeting[1] >= currentMeeting[0]) {
      // If so, checks if the END of the first meeting is LESS than the END time of the current meeting.
      if (lastMeeting[1] < currentMeeting[1]) {
        // If both clauses above are true, then this means the two meeting times partially overlap. Therefore the end time of lastMeeting is adjusted to equal the end time of the currentMeeting.
        lastMeeting[1] = currentMeeting[1];
      }
    } else {
      // This is what is triggered if no overlap is present. The current start and end times for this iteration of the loop will exist in their own index on the result array, meaning that these times do not intersect with any other times present in the beginning array.
      result.push(currentMeeting);
    }
  }

  return result;
};

var arr = [ [ 5, 8 ], [ 1, 4 ], [ 6, 8 ] ];
console.log(mergeMeetingTimes(arr));