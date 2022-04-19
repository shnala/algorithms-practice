// Write a function that takes in a 2D array of meeting times, where each sub array contains 2 integers representing a meeting start and end time. Return a new 2D array such that overlapping meeting blocks are condensed into combined meeting blocks

var mergeMeetingTimes = function(arr) {
    var sortedArr = arr.sort((a, b) => a[0] - b[0]);
    console.log(sortedArr);
    let result = [sortedArr[0]];

    for (let i = 0; i < arr.length; i++) {
        const currentMeeting = arr[i];
        const lastMeeting = result[result.length-1];

        // Check if the meeting in the result variable and the meeting in the current iteration of the loop have any overlapping times. Do this by checking if the end time of lastMeeting is GREATER than the start time of currentMeeting, and LESS than the end time of currentMeeting.
        if (lastMeeting[1] >= currentMeeting[0]) {
            if (lastMeeting[1] < currentMeeting[1]) {
                // If true, then the end time of lastMeeting should be updated to equal the end time of currentMeeting.
                lastMeeting[1] = currentMeeting[1];
            }
        } else {
            // If there is no overlap then the currentMeeting must be added to the result array as a new index, indicating that this meeting time is separate from the other meetings.
            result.push(currentMeeting);
        };
        
    };

    return result;
};

var arr = [ [ 5, 8 ], [ 1, 4 ], [ 6, 8 ] ];
// var arr = [[ 1, 3 ], [ 2, 4 ]];

console.log(mergeMeetingTimes(arr));