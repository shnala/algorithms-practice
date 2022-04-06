// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two
//set a variable for largest number and a variable for second largest number
//use loop to check if the number is larger than the max; if not, check if it's larger than the second max


var productOfLargestTwo = function(arr) {
    let max = arr[0];
    let secondMax = arr[0];

    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        if (number > max) {
            secondMax = max;
            max = number;
        } else if ( number > secondMax ) {
            secondMax = number;
        }

    }
    
    return max*secondMax;
};

console.log(productOfLargestTwo([1,2,300,4,5]))

//done