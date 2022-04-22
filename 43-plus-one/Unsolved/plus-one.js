// Write a function that takes in an array of digits representing a non negative integer and add one to it. The digits are arranged such that the most significant digits are on the left and each element in the array contains a single digit
// Return the new array
// Solve without joining the digits array and modify the original array in place

var plusOne = function(digits) {
    if (digits.length === 0) {
        digits[0] = 1;
        return digits;
    };

    // IF the last digit is 9, then there will be overflow;
    // 9's will always become 0's. The tricky part is creating logic to adjust every other value in the array
    // IF 79, change 9 to 0, and 7 to 8.
    // Where digit[i] === 9, change digit[i-1] to digit[i-1]+=1 IF digit[i-1] !== 9
    // IF 99, change both 9's to 0.
    // Case will be slightly different if all integers are 9, meaning the length of the array will increase upon adding 1. Create an individual IF statement for this.

    if ((new Set (digits)).size === 1 && digits.includes(9)) {
        console.log('This number only has 9s');
        for (let i = 0; i < digits.length; i++) {
            if (digits[i] === 9) {
                digits[i] = 0;
                if (digits[i-1] !== 9) {
                    digits[i-1] +=1;
                };
            };
        };

        // Increases array length
        digits[digits.length] = 0;

    } else if (digits[digits.length-1] === 9) {
        for (let i = 0; i < digits.length; i++) {
            if (digits[i] === 9) {
                digits[i] = 0;
                if (digits[i-1] !== 9) {
                    digits[i-1] +=1;
                };
            };
        };

    } else {
        // Normal functionality
        digits[digits.length-1]+=1;
    };

    return digits;
};

// var digits = [ 9,9,9 ];
console.log(plusOne(digits));

// DONE