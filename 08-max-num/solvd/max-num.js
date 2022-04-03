// Write code to return the largest number in the given array

var maxNum = function(arr) {
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        const currentNumber = arr[i];
        
        if (max < currentNumber) {
            max = currentNumber;
        }
    }

    return max;
};

console.log(maxNum([12,63,200,5]));

//done