// Dashatize it

// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return an empty value.

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

function dashatize(num) {
    //get 'em
    if (num === 0) return '0'
    else if (!num) return 'NaN'
    
    let numStr = num.toString()
    if(numStr[0]==='-') numStr = numStr.slice(1)
    
    let arr = numStr.split('')
  
    for (let i= 0 ; i < numStr.length ; i++) {
      if (arr[i]%2===0 && arr[i+1]%2===0) {
        arr[i] += arr[i+1] ;
        arr.splice(i+1,1) ;
        i--;
      }
    }
    return arr.join('-')
  }





//   Longest vowel chain

// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

function solve(s){
    let consecVowels = s.match(/[aeiou]+/g)
    return consecVowels.sort((a,b)=>b.length - a.length)[0].length
  }







  //Regex Password Validation

//   You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

function validate(password) {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password);
  }





//Smallest value of an array

// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

function min(arr, toReturn) {
    // TODO
    let val = Math.min(...arr)
    let ind = arr.indexOf(val)
    
    return toReturn === 'value' ? val : ind
  }