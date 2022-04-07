// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
    arrObj = {};
    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        if (!arrObj[number]) {
            arrObj[number] = 1;
        } else {
            arrObj[number]++;
        }

        if(arrObj[number] > 1) {
            return false;
        }
    }

    return true;
};

console.log(isUnique([1,2,3,4,5]));
//done