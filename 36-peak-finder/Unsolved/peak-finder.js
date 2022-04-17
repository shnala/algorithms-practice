let arr = [3, 2, 1];
const peakFinder = function(nums) {
  // TODO: Write a function that takes an array of integers containing exactly one peak.
  // A peak is defined as a location in the array where the value is greater than every number to the left and every number to the right. Return the value found at the array's peak
  let max = nums.sort(function(a, b) {
    return b - a;
  });

  return max[0];
};

console.log(peakFinder(arr));

// Alternative solution (doesn't work with negative values);

// const peakFinder = (nums) => {
//   let peak = 0;

//   for (let i = 0; i < nums.length; i++) {
//     const number = nums[i];
//     peak = Math.max(peak, number);
//   };

//   return peak;
// };

// console.log(peakFinder(arr));