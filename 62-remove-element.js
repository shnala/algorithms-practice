/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// remove all instances of 'val' in array 'nums' in-place, i.e. by modifying the original array rather than creating a new one.
// return 'k', the length of the new array
 var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        if (current === val) {
            nums.splice(i, 1);
            // need to decrement i since splice will shorten the array, effectively causing us to 'skip' an index upon the next firing of the loop.
            i--;
        };
    };

    console.log(nums);
    return nums.length;
};

// const nums = [3,2,2,3];
// const val = 3;
// should return k = 2, nums = [2,2,_,_]

const nums = [0,1,2,2,3,0,4,2];
const val = 2;
// should return [0,1,4,0,3]
console.log(removeElement(nums,val));

// faster than 6% and smaller than 5% ¯\_(ツ)_/¯