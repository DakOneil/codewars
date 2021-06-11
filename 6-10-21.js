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