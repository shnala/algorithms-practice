/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// remove all instances of 'val' in array 'nums' in-place, i.e. by modifying the original array rather than creating a new one.
// return 'k', the length of the new array
// var removeElement = function (nums, val) {
//     for (let i = 0; i < nums.length; i++) {
//         const current = nums[i];
//         if (current === val) {
//             nums.splice(i, 1);
//             // need to decrement i since splice will shorten the array, effectively causing us to 'skip' an index upon the next firing of the loop.
//             i--;
//         };
//     };

//     console.log(nums);
//     return nums.length;
// };
// faster than 6% and smaller than 5% ¯\_(ツ)_/¯

// not an original solution
// same sort of logic as exercise 61 'remove duplicates' solution.
// j will increment slower than i, j representing a sort of placeholder, waiting for the loop to find a value nums[i] that equals 'val'. Once it does find a match, 'j' will not increment, meaning that the next occurence of nums[i] NOT equaling 'val' will cause nums[j] to get overwritten. 
// IMPORTANT NOTE: The final effect is that nums[j] will contain all instances of nums[i] wherein nums[i] is NOT equal to 'val'
var removeElement = function (nums, val) {
    var j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j] = nums[i];
            j++
        }
    }
    return j;
};
// faster than 17%, smaller than 97%

// const nums = [3,2,2,3];
// const val = 3;
// should return k = 2, nums = [2,2,_,_]

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;
// should return [0,1,4,0,3]
console.log(removeElement(nums, val));