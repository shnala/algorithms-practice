// Write a function that takes in an array of sorted strings and returns the index of its rotation point if it has one, else return -1
//NOTE: Letters further down in the alphabet are GREATER than letters that come first in the alphabet, e.g. Z > A. 

var words = ["great", "ostrich", "panther", "ruby", "chosen", "feathers"];
// Using the above as an example, the starting value for words[left] would be 'great' and words[right] 'feathers'
// Middle would be 5 + 0 / 2 = 2.5 which is Math.floor'd to equal 2, therefore words[middle] would be 'panther'
// Since 'panther' is not the rotation point (words[middle] is not < words[middle-1], which is 'ostrich'), and words[left] is NOT greater than words[middle] (those being 'great' and 'panther,' respectively), then the ELSE statement is triggered, which adjusts the value of left to be middle + 1.
// The new left value is 3, which means words[left] is now 'ruby'
// The new middle value is 3 + 5 / 2 = 4, meaning words[middle] is now 'chosen'
// 'chosen' IS less than words[middle -1], which is 'ruby', therefore the index of 'chosen' is returned, which is 4.

var rotationPoint = function(words) {
  var left = 0;
  var right = words.length - 1;

  while (left <= right) {
    // middle represents the middle index of the array. It is constantly changing as this loop is iterated through; if line 23 is reached, then the values of left and right change. Right will be middle - 1, and left will be middle + 1; therefore, if the prior value of middle were 2, then right would equal 1, and left would equal 3. Middle would then equal 2 again
    var middle = Math.floor((right + left) / 2);

    // IF the middle word is alphabetically greater than the word prior to it in the array, then it is the point of rotation, and its index value should be returned.
    if (words[middle] < words[middle - 1]) {
      return middle;
    }

    // IF word[left] is LATER in the alphabet than word[middle], then the right position is incremented left-wards of middle.
    // IF the word[left] is EARLIER in the alphabet than word[middle], then the left position is incremented right-wards of middle.
    if (words[left] > words[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
};
