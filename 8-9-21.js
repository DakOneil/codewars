// Did she say hallo?

// You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

// Write a simple regex to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish
// By the way, how cool is the czech republic hallo!!

// PS. you can assume the input is a string. PPS. to keep this a beginner exercise you don't need to check if the greeting is a subset of word ('Hallowen' can pass the test)

// PS. regex should be case insensitive to pass the tests

function validateHello(greetings) {
    let hello = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc']
    greetings = greetings.toLowerCase()
    return hello.map(el=>greetings.includes(el)).some(x=>x)
  }





// Sort the Vowels!

// Sort the Vowels!
// In this kata, we want to sort the vowels in a special format.

// Task
// Write a function which takes a input string s and return a string in the following way:

   
//                   C|                          R|
//                   |O                          n|
//                   D|                          d|
//    "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
//                   W|                          T|
//                   |A                          |e
//                   R|                          5|
//                   S|                          T|

// Notes:

// List all the Vowels on the right side of |
// List every character except Vowels on the left side of |
// Return every character in its original case
// Each line is seperated with \n
// Invalid input ( undefined / null / integer ) should return an empty string

function sortVowels(s){
    //code
    let vowels = 'aeiou'
    if (typeof s === "string") {
        return s.split('').map(el=> {
          if (vowels.includes(el.toLowerCase())) {
            return '|' + el
          } else {
            return el + '|'
          }
        }).join('\n')
    } else {
      return ''
    }
  }






//   Strings: swap vowels' case

// Special thanks to SteffenVogel_79 for the idea.

// Challenge:

// Given a string, return a copy of the string with the vowels' case swapped.

// For this kata, assume that vowels are in the set "aeouiAEOUI".

// Example: Given a string "C is alive!", your function should return "C Is AlIvE!"

// Addendum: Your solution is only required to work for the ASCII character set.

// Please make sure you only swap cases for the vowels.

function swapVowelCase(str) {
    // your code here
    let lowVow = 'aeiou'
    let upVow = 'AEIOU'
    return str.split('').map(el=> {
      if (lowVow.includes(el)) {
        return el.toUpperCase()
      } else if (upVow.includes(el)) {
        return el.toLowerCase()
      } else {
        return el
      }
    }).join('')
  }





//   Simple beads count

// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

// @ @@ @ @@ @ @@ @ @@ @ @@ @

// Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
// If there are less than 2 blue beads return 0.

function countRedBeads(n) {
    //your code here
    return n > 0 ? (n-1)*2 : 0
  }




//   Prefill an Array

// Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

// You have to validate input:

// v can be anything (primitive or otherwise)
// if v is ommited, fill the array with undefined
// if n is 0, return an empty array
// if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
// When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

// Code Examples

//     prefill(3,1) --> [1,1,1]
    
//     prefill(2,"abc") --> ['abc','abc']
    
//     prefill("1", 1) --> [1]
    
//     prefill(3, prefill(2,'2d'))
//       --> [['2d','2d'],['2d','2d'],['2d','2d']]
      
//     prefill("xyz", 1)
//       --> throws TypeError with message "xyz is invalid"

function prefill(n, v) {
    let e = {
      name: 'TypeError',
      message: `${n} is invalid`
    }
  
    if (typeof +n !== 'number') throw e
    else if (n===true || n ===false) throw e
    else if (n == 0)  return []
    else if (+n%1!=0) throw e
    else if (n <= 0) throw e
    else if (!v) {
       let arr = []
       v = undefined
      for (let i =1 ; i <= n ; i++) {
        arr.push(v)
      }
     return arr
    }
    else {
      let arr = []
      for (let i =1 ; i <= n ; i++) {
        arr.push(v)
      }
     return arr
    }
  }