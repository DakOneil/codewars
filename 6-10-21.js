// Regexp Basics - is it a vowel?

// Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u), and false otherwise.

String.prototype.vowel = function() {
    return /^[aeiou]$/i.test(this)
};




// RGB To Hex Conversion

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b){
    // complete this function  
    if (r<0) r=0
    else if (r>255) r=255
    if (g<0) g=0
    else if (g>255) g=255
    if (b<0) b=0
    else if (b>255) b=255
    r = r.toString(16)
    g = g.toString(16)
    b = b.toString(16)
    if (r.length ==1) r = 0 + r
    if (g.length ==1) g = 0 + g
    if (b.length ==1) b = 0 + b
    return (r + g + b).toUpperCase()
  }




//   Find the missing letter

//   #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

function findMissingLetter(array){
    let aBet = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0 ; i < array.length-1 ; i++) {
      let thisOne = aBet.indexOf(array[i].toLowerCase())
      let nextOne = aBet[thisOne+1]
      if (array[i+1].toLowerCase() != nextOne) {
        return array[i] == aBet[thisOne] ? nextOne : nextOne.toUpperCase()
      }
    }
  }



//first 4kyu!!!!!!
//   Sudoku Solution Validator

// Sudoku Background
// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
// (More info at: http://en.wikipedia.org/wiki/Sudoku)

// Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

// Examples
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]); // => true
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2], 
//   [6, 7, 2, 1, 9, 0, 3, 4, 8],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9]
// ]); // => false

function validSolution(board){
    //TODO
    if (board.includes(0)) return false
    for (let i = 0 ; i < board.length ; i++) {
      for (let j = 1 ; j < board.length ; j++) {
        if (board[0][i] == board[j][i]) return false
      }
    } 
    let grid1 = []
    for (let i = 0 ; i < 3 ; i++) {
      for (let j = 0 ; j < 3 ; j++) {
        if(!grid1.includes(board[i][j])) grid1.push(board[i][j])
        else return false
      }
    }
    let grid2 = []
    for (let i = 0 ; i < 3 ; i++) {
      for (let j = 3 ; j < 6 ; j++) {
        if(!grid2.includes(board[i][j])) grid2.push(board[i][j])
        else return false
      }
    }
    let grid3 = []
    for (let i = 0 ; i < 3 ; i++) {
      for (let j = 6 ; j < 9 ; j++) {
        if(!grid3.includes(board[i][j])) grid3.push(board[i][j])
        else return false
      }
    }
    let grid4 = []
    for (let i = 3 ; i < 6 ; i++) {
      for (let j = 0 ; j < 3 ; j++) {
        if(!grid4.includes(board[i][j])) grid4.push(board[i][j])
        else return false
      }
    }
    let grid5 = []
    for (let i = 3 ; i < 6 ; i++) {
      for (let j = 3 ; j < 6 ; j++) {
        if(!grid5.includes(board[i][j])) grid5.push(board[i][j])
        else return false
      }
    }
    let grid6 = []
    for (let i = 3 ; i < 6 ; i++) {
      for (let j = 6 ; j < 9 ; j++) {
        if(!grid6.includes(board[i][j])) grid6.push(board[i][j])
        else return false
      }
    }
    let grid7 = []
    for (let i = 6 ; i < 9 ; i++) {
      for (let j = 0 ; j < 3 ; j++) {
        if(!grid7.includes(board[i][j])) grid7.push(board[i][j])
        else return false
      }
    }
    let grid8 = []
    for (let i = 6 ; i < 9 ; i++) {
      for (let j = 3 ; j < 6 ; j++) {
        if(!grid8.includes(board[i][j])) grid8.push(board[i][j])
        else return false
      }
    }
    let grid9 = []
    for (let i = 6 ; i < 9 ; i++) {
      for (let j = 6 ; j < 9 ; j++) {
        if(!grid9.includes(board[i][j])) grid9.push(board[i][j])
        else return false
      }
    }
    return true
  }