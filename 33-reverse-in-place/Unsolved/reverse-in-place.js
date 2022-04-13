// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const arr = [2, 4, 6, 8];

const reverseInPlace = (arr) => {
    let idx = arr.length -1;
    for (let i = 0; i < arr.length; i++) {
        var temp = arr[i];
        arr[i] = arr[idx];
        console.log(arr[i]);
        arr[idx] = temp;
        idx--;

    };

    console.log(arr);
};


reverseInPlace(arr);