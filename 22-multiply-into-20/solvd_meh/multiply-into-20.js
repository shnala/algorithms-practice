const multiplyInto20 = function(arr) {
  // TODO: Write Your Code Here
  let arrMap = {}
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    if (20 % number === 0) {
      arrMap[number] = true;
    }
  }

  let factors = Object.keys(arrMap);
  for (let i = 0; i < factors.length; i++) {
    const numberOne = factors[i];
    for (let i = 0; i < factors.length; i++) {
      const numberTwo = factors[i];
      if (numberOne * numberTwo === 20) {
        return true;
      }
    }
  }

  return false;
};

console.log(multiplyInto20([1,2,3,4,5,7,9]));
//done
//The first loop isn't necessary, I just wanted some practice using objects to map values. It also helped reduce the number of iterations the nested loops would have to go through in the second half of the function; whether or not that made a significant difference in performance speed is questionable, since I added a third loop after all.
//The official solution is so much more elegant O_o I will be back