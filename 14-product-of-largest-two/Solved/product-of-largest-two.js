// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two
//loop through array
//check if current number is greater than largest
//if not, check if current number is greater than second largest
//if either is true, set current number to be the largest/second largest
//if there is a new largest value, set the previous largest value to be the new second largest value
//return the product

var productOfLargestTwo = function (arr) {
  var largest = null;
  var secondLargest = null;

  for (var i = 0; i < arr.length; i++) {
    var currentNumber = arr[i];

    if (currentNumber > largest || largest === null) {
      secondLargest = largest;
      largest = currentNumber;
    } else if (currentNumber > secondLargest || secondLargest === null) {
      secondLargest = currentNumber;
    }
  }

  return largest * secondLargest;
};
