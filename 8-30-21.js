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




//   Steps in Primes

// The prime numbers are not regularly spaced. For example from 2 to 3 the step is 1. From 3 to 5 the step is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-steps primes:

// 3, 5 - 5, 7, - 11, 13, - 17, 19, - 29, 31, - 41, 43

// We will write a function step with parameters:

// g (integer >= 2) which indicates the step we are looking for,

// m (integer >= 2) which gives the start of the search (m inclusive),

// n (integer >= m) which gives the end of the search (n inclusive)

// In the example above step(2, 2, 50) will return [3, 5] which is the first pair between 2 and 50 with a 2-steps.

// So this function should return the first pair of the two prime numbers spaced with a step of g between the limits m, n if these g-steps prime numbers exist otherwise nil or null or None or Nothing or [] or "0, 0" or {0, 0} or 0 0 or "" (depending on the language).

// Examples:
// step(2, 5, 7) --> [5, 7] or (5, 7) or {5, 7} or "5 7"

// step(2, 5, 5) --> nil or ... or [] in Ocaml or {0, 0} in C++

// step(4, 130, 200) --> [163, 167] or (163, 167) or {163, 167}

// See more examples for your language in "TESTS"

// Remarks:
// ([193, 197] is also such a 4-steps primes between 130 and 200 but it's not the first pair).

// step(6, 100, 110) --> [101, 107] though there is a prime between 101 and 107 which is 103; the pair 101-103 is a 2-step.

// Notes:
// The idea of "step" is close to that of "gap" but it is not exactly the same. For those interested they can have a look at http://mathworld.wolfram.com/PrimeGaps.html.

// A "gap" is more restrictive: there must be no primes in between (101-107 is a "step" but not a "gap". Next kata will be about "gaps":-).

// For Go: nil slice is expected when there are no step between m and n. Example: step(2,4900,4919) --> nil

function step(g, m, n) {
    // your code
  let step = []
  if (n===m) return null
  function checkPrime(n) {
    for (let i = 2 ; i < n ; i++) {
      if (n%i===0) {return false}
    }
    return true
  }
  for (let i = m ; i <= n-g ; i++) {
    if (checkPrime(i) && checkPrime(i+g)) {
      step.push(i,i+g) ;
      break
    }
  }
  return step.length > 0 ? step : null
}