// Find the vowels

//We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

function vowelIndices(word){
    //your code here
    let vowels = 'aeiouy'
    let arr = []
    for (let i = 0 ; i < word.length ; i++) {
      if (vowels.includes(word.toLowerCase()[i])) {arr.push(i+1)}
    } return arr
  }




//   Moves in squared strings (I)

//   This kata is the first of a sequence of four about "Squared Strings".

// You are given a string of n lines, each substring being n characters long: For example:

// s = "abcd\nefgh\nijkl\nmnop"

// We will study some transformations of this square of strings.

// Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
// vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
// Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
// hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"
// or printed:

// vertical mirror   |horizontal mirror   
// abcd --> dcba     |abcd --> mnop 
// efgh     hgfe     |efgh     ijkl 
// ijkl     lkji     |ijkl     efgh 
// mnop     ponm     |mnop     abcd 
// Task:
// Write these two functions
// and

// high-order function oper(fct, s) where

// fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

// Examples:
// s = "abcd\nefgh\nijkl\nmnop"
// oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
// oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"
// Note:
// The form of the parameter fct in oper changes according to the language. You can see each form according to the language in "Sample Tests".

// Bash Note:
// The input strings are separated by , instead of \n. The output strings should be separated by \r instead of \n. See "Sample Tests".

function vertMirror(strng) {
    // Your code
  let arr = strng.split('\n')
  for (let i = 0 ; i < arr.length ; i++) {
    arr[i] = arr[i].split('').reverse().join('')
  }
  return arr.join('\n')
}
function horMirror(strng) {
    // Your code
  let arr = strng.split('\n').reverse()
  return arr.join('\n')
}
function oper(fct, s) {
    // Your code
  return fct(s)
}





// Substituting Variables Into Strings: Padded Numbers

// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

function solution(value){
    //...
    let str = '' + value
    while (str.toString().length < 5) {
      str = '0' + str
    }
    return `Value is ${str}`
  }