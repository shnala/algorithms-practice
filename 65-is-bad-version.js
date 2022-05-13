/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

//NOTE: test solution on leetcodes, don't use terminal
// solution is binary search algorithm, except that everything after 'bad' will also return true; we want to instead return the first instance of 'bad'
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1;
        let end = n;

        //TODO: Logic for how and why this loop fires and when it ends
        while (start < end) {
            let mid = Math.floor(start + (end-start)/2);
            // if mid is bad, it is not necessarily the first instance of bad. we will iterate backwards to find the first instance
            if (isBadVersion(mid)) {
                //TODO: why not end = mid-1? If end = mid - 1 then test fails for case n = 2; expected output 2, actual output 1 
                end = mid;
                // note that the value for 'mid' will also be affected by changing 'end' and 'start'. This will effectively check every index before 'mid' until the first instance of 'bad' is found
            } else {
                // set start to be mid since we have not yet reached the 'bad' point in the array yet
                start = mid + 1
            }
        }

        return start;
    };
};

const n = 5;
const bad = 4;
// expected output: 4

console.log(solution(n));
// sick