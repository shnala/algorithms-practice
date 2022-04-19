// Function should return the sum of integers from the parent array that, when added together, equal the highest possible sum that can be obtained from contiguous integers in the parent array.

const maxSumArray = function(numbers) {
  // Write your solution here
  let maxSum = numbers[0];
  let result = numbers[0];

  if (numbers.length === 1) {
    return numbers[0];
  };

  if (numbers.length === 2 || numbers.every((x) => x >= 0)) {
    return numbers.reduce((a,b) => a + b, 0)
  };

  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    // At each iteration, checks which is greater of the two: the current sum of contiguous integers, or the current sum PLUS the value of the current iteration of the loop.
    maxSum = Math.max(current, current + maxSum);
    console.log(`Comparing current:${current} to current plus maxSum:${current + maxSum}`);
     
    // Sets result to equal maxSum if the newest iteration of maxSum is greater than the previously established result. This is what ensures the highest sum is returned, otherwise the sum would be constantly overwritten upon each loop. 
    result = Math.max(maxSum, result);
    console.log(`Comparing maxSum:${maxSum} to result:${result}`);
    console.log("---------------------------------")
  };

  return result;
};

// var numbers =  [-2,1,-3,4,-1,2,1,-5,4]
var numbers = [1,2,3,4];

console.log(maxSumArray(numbers));
//done 