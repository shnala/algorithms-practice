/**
 * @param {number[]} prices
 * @return {number}
*/
// given array 'prices', return the greatest difference obtainable when iterating through each index in ascending order, i.e. can only move from prices[0] to index prices[prices.length -1]
// loop through the array
// find the lowest price in 'prices' so we know when to buy
// currentProft = currentPrice - lowestPrice
// if currentProfit > greatestProfit, set currentProfit to be the new greatestProfit
 var maxProfit = function(prices) {
    let greatestProfit = 0;
    let lowestPrice = prices[0];

    for (let i = 0; i < prices.length; i++) {
        const currentPrice = prices[i];
        const currentProfit = currentPrice - lowestPrice;
        
        if (currentPrice < lowestPrice) {
            lowestPrice = currentPrice;
        }

        if (currentProfit > greatestProfit) {
            greatestProfit = currentProfit
        }

    }

    return greatestProfit
};
// done; faster than 8%, smaller than 99.77% o(*￣▽￣*)ブ

const prices = [7,1,5,3,6,4];
// should return 5; profit = 6 - 1; bought on day 1, sold on day 4

// const prices = [9, 2, 6, 10, 0, 6, 5];
// should return 8; 10 - 2
// since 0 < 2, but the greatest profit after '0' is only 6 (6 - 0 = 6), the function needs to be able to account for this

console.log(maxProfit(prices));;