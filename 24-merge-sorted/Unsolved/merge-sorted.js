// Write code to merge two sorted arrays into a new sorted array
// concatenate arrays
// sort arrays from lowest to highest
// compare outerloop to every iterable in innerloop, swap values if outer is greater than inner


//helper function for swapping values
function swap(arr, numberOne, numberTwo)
{
    // create a variable that temporarily holds the value of numberOne
    var temp = arr[numberOne];
    // the value of numberOne is overwritten to now hold the value of numberTwo
    arr[numberOne] = arr[numberTwo];
    // the value of numberTwo is overwritten to now hold the value of numberOne
    arr[numberTwo] = temp;
}

var arr1 = [4, 8, 15, 16, 23, 42];
var arr2 = [1, 2, 3, 6, 20, 21];

var mergeSorted = function (arr1, arr2) {
    arr = arr1.concat(arr2);
    // sortedArr = [];

    for (let i = 0; i < arr.length; i++) {
        const numberOuter = arr[i];
        for (let i = 0; i < arr.length; i++) {
            const numberInner = arr[i];
            if (numberOuter > numberInner) {
                swap(arr, numberOuter, numberInner);
            }
        }
    }
    return arr;
};

console.log(mergeSorted(arr1, arr2));