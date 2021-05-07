// Build Tower

// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a [String];
// Ruby: returns an Array;
// Lua: returns a Table;
// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]

function towerBuilder(nFloors) {
    // build here
    let arr = []
    let str = "*"
    for (let i = 1 ; i <= nFloors ; i++) {
      let newStr = str 
      newStr = newStr.repeat((2*i)-1)
      arr.push(newStr)
      for (let i = 0 ; i < arr.length-1 ; i++) {
      arr[i] = ' ' + arr[i] + ' '
    }
    }
    
    return arr
  }

//   Count number of zeros from 1 to N

//   Create an algorithm to count the number of zeros that appear between 1 and N.

// Examples:

// There are 2 zeros from 1 to 20: 10, 20

// There are 11 zeros from 1 to 100: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100

// countZeros(10); // returns 1
// countZeros(100); // returns 11
// countZeros(200); // returns 31

function countZeros(n) {
  // code here
  let count = 0
  for (let i = 1 ; i <= n ; i++) {
    let letter = i.toString()
    for (let j = 0 ; j < letter.length ; j++) {
      if (letter[j]=='0') count++
    }
  }
  return count
}