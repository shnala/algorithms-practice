/**
 * @param {number} numRows
 * @return {number[][]}
 */

// argument 'numRows' is the number of rows in the triangle; return an array containing subarrays representing each individual row of the triangle.
// start from the top; n = 1, to represent row 1. The number,x, of numbers in each row will equal n.
// while n = 1 || n = 2, x = 1
// while n <= numRows && n > 2, iterate thru loop while increasing n by 1 upon each iteration
// when the loop iterates, x will equal x + (x - 1) from the previous row
var generate = function (numRows) {
    // initialize triangle
    let triangle = [[1], [1, 1]];
    // n will be our marker of sorts, used for iteration. Calculations begin at row 3, hence n = 3
    let n = 3

    // edgecases for performance; 1 <= numRows <= 30
    if (numRows === 1) {
        return [[1]];
    }

    // need to push array of length 'n' to triangle; array should be [1, _, 1], whereby '_' is of value triangle[n-1][0] + triangle[n-1][1]
    while (n < numRows + 1) {
        // initialize a row of length 'n' and set the first and last values to '1'
        let row = new Array(n)
        // upperRow will initiate at triangle[1], which is [1,1]. Upon iteration of the first loop, n will increment to 4, so upperRow will become triangle[2]. Note that this needs to be manually updated upon each iteration, otherwise upperRow will remain at triangle[1]
        let upperRow = triangle[n - 2]

        for (let i = 0; i < row.length; i++) {
            // const number = row[i];
            if (i === 0 || i === (row.length - 1)) {
                row[i] = 1;
            } else {
                // starts filling indexes at index 1, therefor must add previous row of i -1 (which will always be 1) and the next number, which is just i
                // [1, _, _, 1]
                // [1, ()]
                row[i] = upperRow[i - 1] + upperRow[i]
            }
        }
        console.log('New Row');
        n++;
        triangle.push(row);
    }

    return triangle;
};

const numRows = 3;

// const numRows = 5;
// should output [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]];

console.log(generate(numRows));
// done, faster than 23%, smaller than 75% ヾ(^▽^*)))