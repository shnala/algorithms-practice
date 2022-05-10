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

// solution from discussion
// define a 'complement' to nums[i] and search for that value in the array
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        // const nums[i] = nums[i];
        var complement = target - nums[i];

        // Here, the nums array will be searched for the complement value. 'found' will be -1 if no result is found.
        // i + 1 here indicates where to begin searching 'nums' for value 'complement.' 
        var found = nums.indexOf(complement, i + 1);

        if (found !== -1) {
            return [i, found];
        };
    };

    return null;
};

// done

// another solution, using a hash table, not necessarily faster
var twoSum = (nums, target) => {
    let hashTable = {};
    for (let i = 0; i < nums.length; i++) {
        const number = nums[i];
        hashTable[number] = i;
    };

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        let found = nums.indexOf(complement, i + 1);
        if (found !== -1) {
            return [i, found]
        };
    };

    return null;

};


const nums = [3, 5, 9, 12, 15];
const target = 21;
// expect [2,3]

// const nums = [3,3];
// const target = 6;
// expect [0,1]

console.log(twoSum(nums, target));