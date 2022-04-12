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

// var arr1 = [4, 8, 15, 16, 23, 42];
// var arr2 = [1, 2, 3, 6, 20, 21];

// var mergeSorted = function (arr1, arr2) {
//     arr = arr1.concat(arr2);
//     // console.log(arr);

//     for (let i = 0; i < arr.length; i++) {
//         // var number = arr[i];
//         for (let j = 0; j < arr.length; j++) {
//             // var numberCompare = arr[j];
//             if (arr[i] < arr[j]) {
//                 var temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// };

// console.log(mergeSorted(arr1, arr2));

//Solved using bubble sort although that wasn't necessarily the point of the exercise.

//Attempt two, recognizing that arr1 and arr2 are already sorted.

var arr1 = [4, 8, 15, 16, 23, 42];
var arr2 = [1, 2, 3, 6, 20, 21];

var mergeSorted = (arr1, arr2) => { 
    let place1 = 0;
    let place2 = 0;
    let arr = [];

    //Effectively, while both arrays are still 'unfinished', i.e., not been iterated through, perform this operation, which compares the values in each array. Since each array is already sorted, we need only compare the current index of either array, and then move to the next index after the copmarison has been made.
    while (place1 < arr1.length && place2 < arr2.length) {
        var num1 = arr1[place1];
        var num2 = arr2[place2];

        if (num1 < num2) {
            arr.push(num1);
            place1++;
        } else if (num2 < num1) {
            arr.push(num2);
            place2++;
        }
    };

    //It is likely that one array will be fully iterated through before the other. This will cause a truncation in the final result, in that the final array will not contain all values of the child arrays because one array has not been fully iterated through. To prevent this, a while loop is created for each instance, i.e. arr2 is finished before arr1 is finished, and vice versa.
    while (place1 < arr1.length) {
        var num = arr1[place1];
        arr.push(num);
        place1++;
    }

    while (place2 < arr2.length) {
        var num = arr2[place2];
        arr.push(num);
        place2++;
    }

    return arr;
};

console.log(mergeSorted(arr1, arr2));


// var mergeSorted = (arr1, arr2) => {
//     arr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr2[j] < arr1[i]) {
//                 arr.push(arr2[j]);
//                 arr1.splice(arr2[j], 1);
//                 console.log(`Arr2 after splice: ${arr2}`)
//             } else if (arr1[i] < arr2[j]) {
//                 arr.push(arr1[i]);
//                 arr1.splice(arr1[i], 1);
//                 console.log(`Arr1 after splice: ${arr1}`)
//             }
//         }
        
//     }
//     return arr;
// }

// console.log(mergeSorted(arr1, arr2));
//adds duplicates and gives truncated results