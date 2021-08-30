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