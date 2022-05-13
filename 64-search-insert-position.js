/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// return index of 'target' in array 'nums'
// if target does not exist in nums, insert it in proper order.
 var searchInsert = function(nums, target) {
    if (!nums.includes(target)) {
        // catch for target inserting to start of array
        if (target < nums[0]) {
            nums.unshift(target);
            return 0;
        };

        // catch for target inserting to end of array
        if (target > nums[nums.length-1]) {
            nums.push(target);
            return nums.length-1;
        };

        // target will insert where it is in order
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < target && nums[i+1] > target) {
                nums.splice(i+1, 0, target);
                break;
            };
        };
    };

    return nums.indexOf(target);
};
// done, faster than 47%, smaller than 53% o(￣┰￣*)ゞ

// const nums = [1,3,5,6];
// const target = 5;
// expected output: 2

const nums = [1,3,5,6];
const target = 2;
// expected output: 1

console.log(searchInsert(nums, target));