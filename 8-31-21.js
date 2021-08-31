// Find min and max

// Implement a function that returns the minimal and the maximal value of a list (in this order).

function getMinMax(arr){
    //..
    return [Math.min(...arr), Math.max(...arr)]
  };







//   Average Scores

// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

function average(scores) {
    // code to calculate the average
  return Math.round(scores.reduce((acc,c)=>acc+c,0) / scores.length)
}






// Odd-Even String Sort

// Given a string S. You have to return another string such that even-indexed and odd-indexed characters of S are grouped and groups are space-separated (see sample below)

// Note: 
// 0 is considered to be an even index. 
// All input strings are valid with no spaces
// input: 'CodeWars'
// output 'CdWr oeas'

// S[0] = 'C'
// S[1] = 'o'
// S[2] = 'd'
// S[3] = 'e'
// S[4] = 'W'
// S[5] = 'a'
// S[6] = 'r'
// S[7] = 's'
// Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
// odd ones are 1, 3, 5, 7, so the second group is 'oeas'
// And the final string to return is 'Cdwr oeas'

// Enjoy.

function sortMyString(S) {
    // your code here
  let sortedArr = ['','']
  S.split('').forEach((e,i,a)=> {
    if (i%2===0) {
      sortedArr[0] += e
    } else {
      sortedArr[1] += e
    }
  })
  return sortedArr.join(' ')
}