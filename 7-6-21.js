// Two Oldest Ages

// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// For example:

// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    return [ages.sort((a,b)=>b-a)[1], ages.sort((a,b)=>b-a)[0]]
  }
  






// Are the numbers in order?

// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

// For the purposes of this Kata, you may assume that all inputs are valid, i.e. non-empty arrays containing only integers.

// Note that an array of 1 integer is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value. An empty list is considered a degenerate case and therefore will not be tested in this Kata - feel free to raise an Issue if you see such a list being tested.

// For example:

// inAscOrder([1,2,4,7,19]); // returns true
// inAscOrder([1,2,3,4,5]); // returns true
// inAscOrder([1,6,10,18,2,4,20]); // returns false
// inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order

function inAscOrder(arr) {
    // Code your algorithm here :)
    
    // Hmmm ... maybe we should try our luck out ...
  //   if (Math.random() > 0.5) {
  //    return true;
  //   } else {
  //    return false;
  //   }
    let arr2 = []
    arr.forEach(el=> {
      arr2.push(el)
    })
    arr2.sort((a,b)=>a-b) 
    for (let i = 0 ; i < arr.length ; i++) {
      if (arr[i] != arr2[i]) return false
    }
    return true
  }






// Simple Fun #176: Reverse Letter

// Task
// Given a string str, reverse it omitting all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {
    //coding and coding..
    str = str.split('')
    return str.filter(el=> el.match(/^[a-zA-Z]+$/)).reverse().join('')
  }