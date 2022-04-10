// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

var arr = [
    ["X", "O", "O", "O", "X", "O"],
    ["O", "X", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "X", "X"],
    ["O", "O", "O", "O", "O", "O"]
  ];

// Method 1: Concatenate nested arrays into one larger parent array.
// var arraySearch2D = function(arr) {
//     var newArr = [].concat(...arr);
//     console.log(newArr);
//     let count = 0;
//     for (let i = 0; i < newArr.length; i++) {
//         const e = newArr[i];
//         if (e === "X") {
//             count++;
//         };  
//     };
//     return count;
// };

// console.log(arraySearch2D(arr));
//Done

//Method 2: Iterate through each child array using nested loops
var arraySearch2D = (arr) => { 
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const childArray = arr[i];
        for (let i = 0; i < childArray.length; i++) {
            const element = childArray[i];
            if (element === "X") {
                count++;
            }
        }
    }
    return count;
}

console.log(arraySearch2D(arr));