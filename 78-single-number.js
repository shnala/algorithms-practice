/**
 * @param {number[]} nums
 * @return {number}
 */
// there is only one number in array 'nums' that isn't a duplicate. Return that number
// map the array, counting instances of each number in 'nums'
// find the number in the map that has a value of '1' indicating that it only occurred once
 var singleNumber = function(nums) {
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
       if (Object.hasOwnProperty.call(numMap, number)) {
        //    const number = numMap[number];
           if (numMap[number] === 1) return Number(number);
       }
   }
};

const nums = [4,1,2,1,2];
// should return 4

console.log(singleNumber(nums));