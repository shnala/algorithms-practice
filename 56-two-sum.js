/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// given an array of numbers, return the indices of the two which add up to equal 'target'
// this solution doesn't work for [3,3] target = 9; returns [0,0], should return [0,1]
//  var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         // const nums[i] = nums[i];
//         for (let j = 0; j < nums.length; j++) {
//             // const nums[j] = nums[j];
//             console.log(nums.indexOf(nums[i]), nums.indexOf(nums[j]));
//             if (nums.indexOf(nums[i]) === nums.indexOf(nums[j])) {
//                 continue;
//             } else if (nums[i] + nums[j] === target) {
//                 return [nums.indexOf(nums[i]), nums.indexOf(nums[j])]
//             };
//         }
//     }
// };

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        // const nums[i] = nums[i];
        for (let j = 0; j < nums.length; j++) {
            // const nums[j] = nums[j];
            if (nums[j] === target - nums[i]) {
                return [nums.indexOf(nums[j]), nums.indexOf(nums[i])];
            }
        }
    }
};


const nums = [3,3];
const target = 6;

console.log(twoSum(nums, target));