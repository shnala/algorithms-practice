// Write a function that takes an array and a positive integer and "rotates" the array to the left by the integer
// Modify the original array rather than returning a new one
// There is no need to return from this function

const arr = [1, 2, 3, 4, 5, 6];
const positions = 2;

//The 'shift' method handles all of the trouble of moving every piece of the array down by one index value, which was my initial hangup with this problem. Rather than writing the logic for moving each individual piece of the array, it is far easier to just use shift, since it deletes (and returns) the item at index[0], and 'shifts' everything else in the array down by one index value, such that index[1] is now index[0], index[2] is now index[1], so on so forth.

//Since shift returns the element that was deleted, one can simply use the 'push' method to re-add it to the end of the array, which is where it belongs.
const leftRotation = (arr, positions) => { 
    
    while (positions > 0) {
        let move = arr.shift(arr);
        arr.push(move);
        positions--;
    };
};

leftRotation(arr, positions);
console.log(arr);

// arr.splice(arr[i-positions], 1, arr[i]);

// const leftRotation = (arr, positions) => {
//     for (let i = 0; i < arr.length; i++) {
//         const number = arr[i];
//         if (arr[i - positions] === undefined) {
//             let move = arr.splice(arr[i], 1);
//             arr.push(move);
//         } else {
//             let move = arr.splice(arr[i], 1);
            
//         };
//     };
//     console.log(arr);
// };

//raw confusion