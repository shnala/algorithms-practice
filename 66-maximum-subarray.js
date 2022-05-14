/**
 * @param {number[]} nums
 * @return {number}
 */
// identical to exercise 40
// find the contiguous subarray of 'nums' that gives the largest sum. Return that sum
// iterate through 'nums' and compare var 'max' to max + nums[i]. Set 'max' to equal whichever of the two is greater, using Math.max static method
var maxSubArray = function (nums) {
    // catches for increasing speed of function in certain conditions
    if (nums.length === 1) return nums[0];
    if (nums.every((x) => x >= 0)) {
        return nums.reduce((a,b) => a + b)
    };

    let max = nums[0];
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        // const number = nums[i];
        max = Math.max(nums[i], max + nums[i]);
        console.log(max);
        result = Math.max(max, result);
    };

    return result;
};

// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// should return 6

// const nums = [5,4,-1,7,8];
// should return 23

const nums = [1,2,3,4];
// should return 10

console.log(maxSubArray(nums));
// done, faster than 5%, smaller than 5% ≡(▔﹏▔)≡