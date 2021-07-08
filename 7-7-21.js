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
  
 


  // Street Fighter 2 - Character Selection

//   Short Intro

// Some of you might remember spending afternoons playing Street Fighter 2 in some Arcade back in the 90s or emulating it nowadays with the numerous emulators for retro consoles.

// Can you solve this kata? Suuure-You-Can!

// UPDATE: a new kata's harder version is available here.

// The Kata

// You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid. Such screen looks like this:

// Screen:

// screen

// Selection Grid Layout in text:

// | Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
// | Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
// Input

// the list of game characters in a 2x6 grid;
// the initial position of the selection cursor (top-left is (0,0));
// a list of moves of the selection cursor (which are up, down, left, right);
// Output

// the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, wether successful or not, see tests);
// Rules

// Selection cursor is circular horizontally but not vertically!

// As you might remember from the game, the selection cursor rotates horizontally but not vertically; that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost (examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.

// Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).

// Test

// For this easy version the fighters grid layout and the initial position will always be the same in all tests, only the list of moves change.

// Notice: changing some of the input data might not help you.

// Examples

// 1.

// fighters = [
//     ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//     ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ]
// initial_position = (0,0)
// moves = ['up', 'left', 'right', 'left', 'left']
// then I should get:

// ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
// as the characters I've been hovering with the selection cursor during my moves. Notice: Ryu is the first just because it "fails" the first up See test cases for more examples.

// 2.

// fighters = [
//     ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//     ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ]
// initial_position = (0,0)
// moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
// Result:

// ['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']

function streetFighterSelection(fighters, position, moves){
  let cursorArray = []
  for (let i = 0 ; i < moves.length ; i++) {
    if (moves[i] == 'right') {
      position[1]++
      if (position[1] == 6) {
        position[1] -= 6
      }
    } else if (moves[i] == 'left') {
      position[1]--
      if (position[1] == -1) {
        position[1] += 6
      }
    } else if (moves[i] == 'up' && position[0] == 1) {
      position[0]--
    } else if (moves[i] == 'down' && position[0] == 0) {
      position[0]++
    }
    cursorArray.push(fighters[position[0]][position[1]])
  }
  return cursorArray
}

/*
fighters is an array of two arrays of names
position is the start position of the cursor with in the arrays
moves is an array of directions
say position = [rowIndex, colIndex] 
conditionals if moves[i] == right/left then a[index] will +/- accordingly in a circle of circumference 6
             if moves[i] == up/down then b[index] will +/- accordingly BUT NOT IN A CIRCLE
after the conditionals are followed, the name that is at [rowIndex, colIndex] is pushed to the return array

declare return array
set conditional rules
loop through moves
  set conditional rules
  push name to return array
*/




// extract file name

// You have to extract a portion of the file name as follows:

// Assume it will start with date represented as long number
// Followed by an underscore
// You'll have then a filename with an extension
// it will always have an extra extension at the end
// Inputs:
// 1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION

// 1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34

// 1231231223123131_myFile.tar.gz2
// Outputs
// FILE_NAME.EXTENSION

// This_is_an_otherExample.mpg

// myFile.tar
// Acceptable characters for random tests:

// abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789

// The recommended way to solve it is using RegEx and specifically groups.

class FileNameExtractor {
  static extractFileName (dirtyFileName) {
    let underscoreIndex = dirtyFileName.indexOf('_')
    let extraExtPeriod = dirtyFileName.lastIndexOf('.')
    return dirtyFileName.slice(underscoreIndex+1, extraExtPeriod);
  }
}