// Regex count lowercase letters

// Your task is simply to count the total number of lowercase letters in a string.

// Examples
// lowercaseCount("abc"); ===> 3

// lowercaseCount("abcABC123"); ===> 3

// lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

// lowercaseCount(""); ===> 0;

// lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

// lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26

function lowercaseCount(str){
    //How many?
  return (str.match(/[a-z]/g) == null) ? 0 : str.match(/[a-z]/g).length
}




// Swap Values

// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?

function swapValues(a) {
    return a.reverse()
  }




//   Hex to Decimal

//   Complete the function which converts hex number (given as a string) to a decimal number.
  
  function hexToDec(hexString){
    //your code here
    return parseInt(hexString,16)
  }




//   Basic Training: Add item to an Array

//   Add the value "codewars" to the websites array.
// After your code executes the websites array should == ["codewars"]

// The websites array has already been defined for you using the following code:

// var websites = [];

// add the value "codewars" to the already defined websites array

websites.push('codewars')



// Classic Hello World

// You are given a method called main, make it print the line Hello World! and don't return anything

// Note that for some languages, the function main is the entry point of the program.

// Here's how it will be tested:

// Print "Hello World!" to the screen
class Solution{
  static main()  {
    console.log('Hello World!')
    }
}