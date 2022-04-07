// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

var linearSearch = function(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        if (number === target) {
            return i;
        }
    }
    //it's okay to have return here because the function will not reach this line of code unless the loop fails to find a match
    return -1;
};


console.log(linearSearch([1,2,3,4,5], 5));
//done