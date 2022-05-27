/**
 * @param {number[]} nums
 * @return {number}
 */
// there is only one number in array 'nums' that isn't a duplicate. Return that number
// map the array, counting instances of each number in 'nums'
// find the number in the map that has a value of '1' indicating that it only occurred once
// solution should be O(n) complexity
var singleNumber = function (nums) {
    // edgecases
    if (nums.length === 1) return nums[0];

    const numMap = {};

    for (let i = 0; i < nums.length; i++) {
        const number = nums[i];
        if (!numMap[number]) {
            numMap[number] = 1;
        } else {
            numMap[number]++;
        }
    };

    for (const number in numMap) {
        if (numMap[number] === 1) return Number(number);

    }
};
// faster than 25%, smaller than 26%, could be better

// const nums = [4, 1, 2, 1, 2];
// should return 4

// const nums = [2,2,1];
// should return 1

console.log(singleNumber(nums));