/**
 * @param {number[]} digits
 * @return {number[]}
 */
// identical to exercise 41
// split 'digits', edit last digit +1
// IF last digit is 9, then the preceeding value will change as well.
// IF all digits are 9, then the array will increase in length.
 var plusOne = function(digits) {
    let idx = digits.length -1;

    if (new Set(digits).size === 1 && digits.includes(9)) {
        for (let i = 0; i < digits.length; i++) {
            digits[i] = 0;
        };
        digits.unshift(1);
        return digits;
    };
 
    while (digits[idx] == 9) {
        digits[idx] = 0;
        idx--;
        if (digits[idx] !== 9) {
            digits[idx]++;
            return digits;
        };
    };

    digits[digits.length-1]++;
    return digits;
};
// done, faster than 61%, smaller than 21%

// const digits = [4,3,2,1];
// should return [4,3,2,2]

// const digits = [9,9];
// should return 100

// const digits = [4, 5, 9];
// should return 460

const digits = [8,9,9,9];
// should return 9000;

console.log(plusOne(digits));