// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.
// @param {number[][]} accounts
// @return {number}

var maximumWealth = function(accounts) {
    let highestWealth = 0;

    for (let i = 0; i < accounts.length; i++) {
        const customer = accounts[i];
        let totalWealth = 0;
        for (let j = 0; j < customer.length; j++) {
            const bank = customer[j];
            totalWealth += bank;
        };

        if (totalWealth > highestWealth) {
            highestWealth = totalWealth
        };
    };

    return highestWealth;
};

// const accounts = [[1,2,3],[3,2,1]];
// const accounts = [[1,5],[7,3],[3,5]];
// const accounts = [[2,8,7],[7,1,3],[1,9,5]];

console.log(maximumWealth(accounts));

// done but could do with using less memory