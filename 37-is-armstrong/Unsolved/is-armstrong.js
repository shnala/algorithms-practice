// Write a function that takes a positive integer and returns true if the integer is an armstrong number, 
// else return false. To find out if a number is an armstrong number, 
// take each individual digit and raise it to the power of the length of the entire number and add the digits. 
// If the sum equals the original number, the number is an armstrong number"

// TODO: Complete the function below:

var isArmstrong = function(num) {
    // Converts the integer 'num' into an array so each digit can be iterated upon. Could also convert to a string (which is what I was trying to do but overthought it)
    const numSplit = (num + '').split('').map((digit) => { return Number(digit); });
    console.log(numSplit);

    let sum = 0;
    let digits = numSplit.length;
    
    numSplit.forEach(number => {
        const result = Math.pow(number, digits);
        sum += result;
    });

    console.log(`Final sum:  ${sum}`);
    if (sum === num) {
        return true;
    } else {
        return false;
    };
};

console.log(isArmstrong(1634));