/**
 * @param {number[]} nums1 // has a length m + n
 * @param {number} m // length of nums1, excluding trailing 0's which are placeholders
 * @param {number[]} nums2
 * @param {number} n // length of nums2
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// kinda similar to exercise 24 except that nums1 must be modified in-place
 var merge = function(nums1, m, nums2, n) {
    let idx1 = 0;
    let idx2 = 0;
    let legnth = m + n;

    while (nums2.length !== 0) {
        if (nums1[idx1] === nums2[idx2]) {
            // when values are the same, push nums2[idx2] into the next slot after nums1[idx1]
            nums1.splice([idx1], 0, nums2.shift());
            idx1+=2;
            continue;
        }

        if (nums1[idx1] > nums2[idx2]) {
            nums1.splice([idx1 - 1], 0, nums2.shift());
            idx1++;
            continue;
        }

        if ( nums1[idx1] < nums2[idx2]) {
            nums1.splice([idx1], 0, nums2.shift());
            idx1++;
            continue;
        }
    }
    
    console.log(idx1);
    return nums1
};

const nums1 = [1,2,3,0,0,0]
const m = 3
const nums2 = [2,5,6]
const n = 3
// should return nums1 = [1,2,2,3,5,6]

console.log(merge(nums1, m, nums2, n));

// var merge = function(nums1, m, nums2, n) {
//     let idx1 = 0;
//     let idx2 = 0;
//     let legnth = m + n;

//     while (nums2.length !== 0) {
//         if (nums1[idx1] === nums2[idx2]) {
//             // when values are the same, push nums2[idx2] into the next slot after nums1[idx1]
//             nums1.splice([idx1], 0, nums2.shift());
//             idx1+=2;
//             continue;
//         }

//         if (nums1[idx1] > nums2[idx2]) {
//             nums1.splice([idx1 - 1], 0, nums2.shift());
//             idx1++;
//             continue;
//         }

//         if ( nums1[idx1] < nums2[idx2]) {
//             nums1.splice([idx1], 0, nums2.shift());
//             idx1++;
//             continue;
//         }
//     }
    
//     console.log(idx1);
//     return nums1
// };
// redacted