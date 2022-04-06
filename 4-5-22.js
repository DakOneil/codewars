// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

// For example (Input --> Output)

// "Yes" --> "Yes?" 
// "No?" --> "No?"

function ensureQuestion(s) {
    // Code here
    return s.includes('?') ? s : s + "?";
  }

//   Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]
  
// As you can see, the lists are cascading; ie, they overlap, but never out of order.

function eachCons(array, n) {
    let newArr = []
    
    for( let i = 0 ; i <= array.length - n ; i++) {
      newArr.push(array.slice(i, n+i))
    }
    
      return newArr;
  }


//   Haskell has some useful functions for dealing with lists:

//   $ ghci
//   GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
//   λ head [1,2,3,4,5]
//   1
//   λ tail [1,2,3,4,5]
//   [2,3,4,5]
//   λ init [1,2,3,4,5]
//   [1,2,3,4]
//   λ last [1,2,3,4,5]
//   5
//   Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:
  
//   | HEAD | <----------- TAIL ------------> |
//   [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
//   | <----------- INIT ------------> | LAST |
  
//   head [x] = x
//   tail [x] = []
//   init [x] = []
//   last [x] = x
//   Here's how I expect the functions to be called in your language:
  
//   head([1,2,3,4,5]); => 1
//   tail([1,2,3,4,5]); => [2,3,4,5]
//   Most tests consist of 100 randomly generated arrays, each with four tests, one for each operation. There are 400 tests overall. No empty arrays will be given. Haskell has QuickCheck tests

// TODO: implement the four functions specified.
const head = (arr) => arr[0]
const tail = (arr) => arr.slice(1,arr.length)
const init = (arr) => arr.slice(0, arr.length-1)
const last = (arr) => arr[arr.length-1]





// Given a non-negative integer, return an array / a list of the individual digits in order.

// Examples:

// 123 => [1,2,3]

// 1 => [1]

// 8675309 => [8,6,7,5,3,0,9]

function digitize(n) {
    return ("" + n).split('').map(x=>+x)
  }