// Write a function that takes in an array of sorted strings and returns the index of its rotation point if it has one, else return -1
// define the middle as the final value of left (first value in the array) plust right (last value in the array) divided by two. Use 
// compare the middle with the first value in the array, which we will call left
// if left is less than (earlier in the alphabet) than middle, then this indicates the array is in order, at least with reference to these two indexes. Therefore the next value after the middle (middle + 1) should be checked. We will set (middle + 1) to be the new value for left, in order to bring us closer to the point of rotation.
// NOTE: changing the value for left will also change the value for middle, since middle is calculated based on left and right.
// if the left value is greater than the middle (later in the alphabet), then this indicates the array is not in order. We cannot yet find where the point of rotation is, but this is a clue that the current middle occurs AFTER the point of rotation. Therefore, we should check every index PRIOR to middle. We will set the value of right to (middle -1) so we can get closer to the point of rotation, understanding that it occurs PRIOR to the middle.
// NOTE: changing the value for right will also change the value for middle, since middle is calculated based on left and right.
// Upon each iteration of this loop of operations, we will eventually find the point of rotation. We will know this if middle is less than (earlier in the alphabet) than (middle - 1). This check should be checked for in each iteration of the loop, prior to the previous operations being performed. 
// If the point of rotation is found, its index value (which will just be middle) should be returned.

var rotationPoint = function(words) {
    
};

var words = ["great", "ostrich", "panther", "ruby", "chosen", "feathers"];

console.log(rotationPoint(words));