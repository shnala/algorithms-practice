/**
 * @param {number} rowIndex
 * @return {number[]}
 */

// same as prior pascals triangle, however the function sould return the last row instead of the whole triangle
// rows are 0 indexed; this means the number of rows in the triangle will equal rowIndex + 1
 var getRow = function(rowIndex) {
        // initialize triangle
        let triangle = [[1], [1, 1]];
        let n = 3
        let rows = rowIndex + 1;

        if (rowIndex === 1) {
            return [1,1];
        } else if (rowIndex === 0) {
            return [1];
        }
     
        while (n < rows + 1) {
            // initialize a row of length 'n' and set the first and last values to '1'
            let row = new Array(n)

            let upperRow = triangle[n - 2]
    
            for (let i = 0; i < row.length; i++) {
                // const number = row[i];
                if (i === 0 || i === (row.length - 1)) {
                    row[i] = 1;
                } else {
                    row[i] = upperRow[i - 1] + upperRow[i]
                }
            }
            // console.log('New Row');
            n++;
            triangle.push(row);
        }
    
        return triangle.pop();
};
// done, faster than 58%, smaller than 22%

const rowIndex = 0;
// should output [1,3,3,1]
console.log(getRow(rowIndex));