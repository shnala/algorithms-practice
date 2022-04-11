const arr = [-2, 5, 50, 2, -10, 18, 20];

const multiplyInto20 = function(arr) {
  const numMap = {};

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    //Checks if number is a factor of 20
    let neededNumber = 20 / currentNum;

    //Checking what happens when neededNumber is a decimal
    //No decimal value would have a pair in this instance anyways, since the argument being passed into this function is always going to be an array of whole numbers.
    console.log(`20 divided by ${currentNum} is equal to ${neededNumber}.`);

    //Checks if number has a factor pair on the object map. If it does, then that means both numbers necessary to multiply to 20 exist in the array.
    if (numMap[neededNumber]) {
      return true;
    }

    //If no factor pair, list this number on the map incase of future matches
    numMap[currentNum] = true;
  }

  //Only hits false if no pairs are found
  return false;
};

console.log(multiplyInto20(arr));