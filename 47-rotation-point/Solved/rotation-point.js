// Write a function that takes in an array of sorted strings and returns the index of its rotation point if it has one, else return -1

var rotationPoint = function(words) {
  var left = 0;
  var right = words.length - 1;

  while (left <= right) {
    // middle represents the middle index of the array. It is constantly changing as this loop is iterated through; if line 17 is reached, then the values of left and right change. Right will be middle - 1, and left will be middle + 1; therefore, if the prior value of middle were 2, then right would equal 1, and left would equal 3. Middle would then equal 2 again
    var middle = Math.floor((right + left) / 2);

    // IF the middle word is alphabetically greater than the word prior to it in the array, then it is the point of rotation, and its index value should be returned.
    if (words[middle] < words[middle - 1]) {
      return middle;
    }

    // IF the word in the left position is greater than the word in the middle position, then the words are in order and the positions are incremented; the right position is incremented left-wards of middle, and the left position is incremented right-wards of middle.
    if (words[left] > words[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
};
