// Write a function that takes an array of integers representing the price of a stock on different days.
// Return the maximum profit that can be made from buying and selling a single stock

var arr = [7, 2, 8, 9];

var maxProfit = function (prices) {
  var smallest = Infinity;
  var bestProfit = 0;

  for (var i = 0; i < prices.length; i++) {
    var price = prices[i];
    //Math.min will return whichever is lower, either the current value (var smallest), or the value of the current iteration of the loop. smallest is initialized with a value of infinity to ensure that a value from the array is selected as a starting minimum. It will be updated to the true minimum as the loop continues.
    smallest = Math.min(smallest, price);
    //Math.max will return whichever is higher, either the current value for bestProfit, or the difference between the current iteration of the loop and the lowest price in the array. Whichever value is selected becomes the value for bestProfit, defined above.
    bestProfit = Math.max(bestProfit, price - smallest);
    console.log(`${bestProfit}`);
  }

  return bestProfit;
};

console.log(maxProfit(arr))