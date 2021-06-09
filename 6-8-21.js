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




// Simple validation of a username with regex

// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

function validateUsr(username) {
  return /^[a-z0-9_]{4,16}$/.test(username)
}



// validate code with simple regex

// Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

// You can assume the input will always be a number.

//FIRST TRYYYYY
function validateCode (code) {
  //your code here
    return /^[1-3]/.test(code)
  }





//   Duck Duck Goose
  
//   The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

function duckDuckGoose(players, goose) {
  // ...
  return players[(goose-1)%players.length].name
}




// Wilson primes

// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then ((P-1)! + 1) / (P * P) should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.

function amIWilson(p) {
  // check if prime is Wilson
  function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  return ((factorial(p-1)+1) / (p**2))%1==0 
}