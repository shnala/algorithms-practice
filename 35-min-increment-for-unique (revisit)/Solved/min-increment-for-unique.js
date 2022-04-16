// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique

var arr = [3, 2, 1, 2, 1, 7];

const minIncrement = function(nums) {
  let uniqueNums = {};
  let increments = 0;

  for (var i = 0; i < nums.length; i++) {
    // While the nums map contains a key for the current iteration of the loop, then this means there are still duplicates in the arary. This will cause the while loop below to trigger.
    // NOTE: On the first pass of this loop, this while loop will not trigger because there are no keys in the map to begin with. The loop will jump to line 22.
    while (uniqueNums[nums[i]] === true) {
      // Create a new value in the nums array equal to the current value plus 1.
      console.log(`Log before increment on line 12: ${nums[i]}`);
      nums[i] += 1;
      console.log(`Log after increment on line 12: ${nums[i]}`);
      // Increase the increment counter.  This counter is what will be returned at the end of the function.
      increments++;
    };

    // Establish a key for the current iteration of the loop. The while loop above will check for duplicates by plugging 'i' into the map. If nums[i] for uniqueNums returns true, then that means a key for that value already exists, therefore there is a duplicate.
    uniqueNums[nums[i]] = true;
  }

  return increments;
};

console.log(minIncrement(arr));