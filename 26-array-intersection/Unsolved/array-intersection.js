// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

var arrayIntersection = function(arr1, arr2) {
    // values1 = arr1.values();
    // values2 = arr2.values();
    // console.log(values1);
    result = [];
    numMap = {};

    for (let i = 0; i < arr1.length; i++) {
        const number = arr1[i];
        if (numMap[number]) {
            numMap[number]++;
        } else {
            numMap[number] = 1;
        };
    };

    for (let i = 0; i < arr2.length; i++) {
        const number = arr2[i];
        if (numMap[number]) {
            result.push(number);
        }; 
    };

    // for (const value1 of values1) {
    //     for (const value2 of values2) {
    //         if (value1 === value2) {
    //             result.push(value1);
    //         }
    //     }
    // };
    // stops after first push

    // for (let i = 0; i < arr1.length; i++) {
    //     for (let j = 0; j < arr2.length; j++) {
    //         if (arr1[i] === arr2[j]) {
    //             result.push(arr1[i]);
    //         };
    //     };
        
    // };
    // pushes too many duplicates

    return result;
};

console.log(arrayIntersection([1,2,2,3,4,4],[1,2,2,3,5]));
//done