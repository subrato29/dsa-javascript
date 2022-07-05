/**
 * 118. Pascal's Triangle
Easy

6345

221

Add to List

Share
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let triangle = [];
    
    if (numRows == 0) {
        return triangle;
    }
    
    const firstRow = [1];
    triangle.push (firstRow);
    
    for (let i = 1; i < numRows; i++) {
        const prevRow = triangle[i - 1];
        let currRow = [];
        
        currRow.push (1);
        for (let j = 1; j < i; j++) {
            currRow.push (prevRow[j - 1] + prevRow[j]);
        }
        currRow.push (1);
        
        triangle.push (currRow);
    }
    return triangle;
};