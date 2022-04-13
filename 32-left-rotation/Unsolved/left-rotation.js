// Write a function that takes an array and a positive integer and "rotates" the array to the left by the integer
// Modify the original array rather than returning a new one
// There is no need to return from this function

const arr = [1, 2, 3, 4, 5, 6];
const positions = 2;

const leftRotation = (arr, positions) => {
    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        if (arr[i - positions] === undefined) {
            let move = arr.splice(arr[i], 1);
            arr.push(move);
        } else {
            let move = arr.splice(arr[i], 1);
            
        };
    };
    console.log(arr);
};

leftRotation(arr, positions);
// arr.splice(arr[i-positions], 1, arr[i]);
