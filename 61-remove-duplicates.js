/**
 * @param {number[]} nums
 * @return {number}
 */
// iterate through array and compare the current number to the next number
// since array must be modified in place, i.e. without creating a new array, the value for the next number will need to be set to equal the value for the next next number.
// e.g. since the first number is 0 and the second number is 0, the second number will need to be rewritten to be 1.
// var removeDuplicates = function(nums) {
//     let i = 0;
//     for (let j = 0; j < nums.length; j++) {
//         // if the current number does not equal nums[i] then the next number (nums[++i]) will be made to equal the current number
//         // loops: j ?= i, j = n
//         // first loop: 0 = 0, j = 1
//         // second loop: 0 = 0, j = 2
//         // third loop: 1 != 0, nums[++i] = 1, i = 1, j = 3
//         // array: [0, 1, 1, 1, 1...]
//         // fourth loop: 1 = 1, j = 4
//         // fifth loop: 
//         if (nums[j] != nums[i]) 
//             nums[++i] = nums[j];
//     }
//     return nums;
// };
// idgi

// not an original solution, just trying to work the logic
// var removeDuplicates = function(nums) {
//     let i = 0;

//     for (let j=0; j < nums.length; j++) {
//         if (nums[j] != nums[i]) {
//             // if current number does not equal nums[i] then 'i' will be incremented, and then nums[i] (now representing the next number in the sequence) will be set to equal the current number.
//             // this seems like it's creating duplicates rather than removing them?
//             // first loop: nums[j] = 0, nums[i] = 0
//             // since they are equal, j++ = 1, array is unchanged 
//             // second loop: nums[j] = 0, nums[i] = 0
//             // equal, j++ = 2, unchanged
//             // third loop: nums[j] = 1, nums[i] = 0
//             // no equal, i++ = 1, nums[1] = nums[2], j++ = 3
//             // new array: [0, 1, 1, 1, 1, 2 ,2 ,3, 3, 4]
//             // fourth loop: nums[j] = 1, nums[i] = 1
//             // equal, j++ = 4, unchanged
//             // skip ahead to when nums[j] = 2, nums[i] = 1
//             // since they are not equal, 'i' will be incremented, and nums [i] = nums[j] which is 2
//             // effectively what is happening is that the loop iterates through until it finds a value which doesn't match nums[i], which sits as a placeholder value towards the head of the array until an unequal value is found. That unequal value becomes nums[i], overwriting the original duplicate value. 'i' is then incremented so that nums[i] can represent the next spot to be updated in the array.
//             i++;
//             nums[i] = nums[j]
//         }
//     };

//     // at the end, the nums array is spliced so that it contains as many values as 'i' has been incremented, for 'i' represents the number of non-duplicate values found.
//     return nums.splice(0, i+1);
// };

// not an original solution but the easiest one i found to understand
var removeDuplicates = function(nums) {
    for (i = 0; i < nums.length; i++) {
        //Next number is identical to current one
        if (nums[i] == nums[i+1]) {
            // remove the duplicate value by splicing it out of array (at nums[i], delete '1' value)
            nums.splice(i, 1);
            // step 'i' backwards so that we can check if the value after the splice is a duplicate as well, since that index will effectively replace the index that was just deleted.
            i--;
        }
    }
    // this line should be omitted from submission because it breaks the test somehow
    return nums;
};

// const nums = [0,0,1,1,1,2,2,3,3,4];
// should return 5, nums = [0,1,2,3,4,_,_,_,_,_]

const nums = [1,1,2];
// should return [1, 2]
console.log(removeDuplicates(nums));