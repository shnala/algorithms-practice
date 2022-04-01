// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    let sum = 0;
    arr.forEach(number => {
        return sum += number;
        // console.log(sum += number)
    });
    return sum;
};

// const result = sumArray([1,2,3]);
// console.log(result);

//done