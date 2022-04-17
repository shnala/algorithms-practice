// Write a function that takes in two sorted arrays and returns a pair of numbers
// (one from each array) with the smallest difference.

// TODO: Solve the function below:

// var arr1 = [2, 4, 6, 8, 15, 20];
// var arr2 = [17, 25, 30, 47];

// var arr1 = [1, 2, 3, 5, 6];
// var arr2 = [0, 2, 4, 8, 10];

// var arr1 = [-9, 0, 15, 30, 31, 40, 99];
// var arr2 = [36, 47, 58, 69, 80, 101];

var arr1 = [4, 8, 15, 16, 23, 42];
var arr2 = [108, 112, 112, 155, 156, 170];


var smallestDifference = function (arr1, arr2) {
    let idx1 = 0;
    let idx2 = 0;
    let bestDiff = Infinity;
    let pair = [];

    while (idx1 < arr1.length && idx2 < arr2.length) {
        let arr1Val = arr1[idx1];
        let arr2Val = arr2[idx2];
    
        let difference = Math.abs(arr1Val - arr2Val);
        if (difference < bestDiff) {
            bestDiff = difference;
            pair = [arr1Val, arr2Val];
            // console.log(pair);
        };

        if (arr1Val < arr2Val) {
            idx1++;
        } else if (arr1Val > arr2Val) {
            idx2++;
        };
    };


    return pair;
};

console.log(smallestDifference(arr1, arr2));
//done but causes test suite to freeze? Idk but it passes all the tests when i plug them in manually ╮（╯＿╰）╭