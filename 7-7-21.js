// Multiplication Tables

// Create a function that accepts dimensions, of Rows x Columns, as parameters in order to create a multiplication table sized according to the given dimensions. **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.

// Example:

// multiplication_table(3,3)

// 1 2 3
// 2 4 6
// 3 6 9

// -->[[1,2,3],[2,4,6],[3,6,9]]

// Each value on the table should be equal to the value of multiplying the number in its first row times the number in its first column.

function multiplicationTable(row,col){
    //your code here
    let multiplicationTable = []
    for (let i = 1 ; i <= row ; i++) {
      let rowArray = []
      for (let j = 1 ; j <= col ; j++) {
        rowArray.push(j*i)
      }
      multiplicationTable.push(rowArray)
    }
    return multiplicationTable
  }
  
  /*
  take in two numbers that represent the row and column count. return an array of 
  arrays that would make a multiplication table when stacked.
  */
  // declare return array
  // init a for loop to run the number of rows
  // in the for loop declare the inner array that will be pushed to the return array
  // init another for loop to run the number of cols
  // push to the inner array the col num * the row num
  // outside the inner loop, then push the whole inner array to the return array
  // outside the outer loop, return the return array





//   Ordered Count of Characters

//   Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

var orderedCount = function (text) {
    // Implement me!
    let charCountArray = []
    let countedChars = ''
    for (let i = 0 ; i < text.length ; i++) {
      let count = 0
      if (!countedChars.includes(text[i])) {
        for (let j = 0 ; j < text.length ; j++) {
          if (text[j] == text[i]) count++
        }
      charCountArray.push([text[i], count])
      }
    countedChars += text[i]
    }
    return charCountArray
  }
  
 