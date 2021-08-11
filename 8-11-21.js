// Flatten

// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

var flatten = function (array){
    // TODO: Program me
    let secArray = []
    for (let i = 0 ; i < array.length ; i++) {
      if (Array.isArray(array[i])) {
        secArray.push(...array[i])
      } else {
        secArray.push(array[i]) 
      }
    }
    return secArray
  }






// IP Validation

// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

function isValidIP(str) {
    if (str.match(/\n/g) || str[0] === '.' || str.match(/[a-z]/g) || str.includes('..') || str[str.length-1] == '.' || str.includes(' ') || !str) {
      return false
    } else {
      let arr = str.split('.')
    let len = arr.length 
    if (len !== 4) return false
    if (arr.some(x=>x[0]==='0' && x.length > 1)) return false
      let nums = arr.map(el=> +el)
      return nums.every(x=> {
        return x > -1 && x < 256
      })
    }
  }






//   Valid Spacing

// Task
// Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either True or False.

// For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Below are some examples of what the function should return.

// 'Hello world' = true
// ' Hello world' = false
// 'Hello world  ' = false
// 'Hello  world' = false
// 'Hello' = true
// // Even though there are no spaces, it is still valid because none are needed
// 'Helloworld' = true 
// // true because we are not checking for the validity of words.
// 'Helloworld ' = false
// ' ' = false
// '' = true
// Note - there will be no punctuation or digits in the input string, only letters.

function validSpacing(s) {
    // write your code here
    if (s != s.trim() || s.includes('  ')) return false
    return true
  }