// Write a function that takes an array of integers representing the price of a stock on different days.
// Return the maximum profit that can be made from buying and selling a single stock.

// TODO: Complete the function below:

var arr = [1, 6, 7, 9];
//Should return 8;

// var arr = [9, 7, 4, 1];
// Should return 0;

var maxProfit = function (prices) {
    let profit = 0;
    let min;
    let max;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > prices[i+1]) {
            max = prices[i];
        };
        
    };
    console.log(max);
    return profit;
};

console.log(maxProfit(arr));