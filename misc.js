// Minimize Sum Of Array (Array Series #1)

// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always has even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 
// Explanation:
// The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
// minSum({12,6,10,26,3,24}) ==> return (342)
// Explanation:
// The minimum sum obtained from summing each two integers product , 26*3 + 24*6 + 12*10 = 342
// minSum({9,2,8,7,5,4,0,6}) ==> return (74)
// Explanation:
// The minimum sum obtained from summing each two integers product , 9*0 + 8*2 +7*4 +6*5 = 74

function minSum(arr) {
    // your code here
    arr.sort((a,b)=>b-a)
    let arrProducts = []
    for (let i = 0 ; i < arr.length / 2 ; i++) {
      arrProducts.push(arr[i] * arr[arr.length - 1 - i])
    }
    return arrProducts.reduce((acc,c)=> acc + c, 0)
  }
  
  /*
  return the smallest sum of each two integers' product
  so basically what is the smallest sum when you have to multiply all the 
  arr numbers when put in pairs
  this works out to be:
  biggest * smallest + 
  the secondBiggest * secondSmallest + so on....
  
  sort the arr
  for loop through half the arr length
    multiply arr[i] * arr[arr.length-i]
  sum the products
  return the sum
  */





//   Sum of array singles

//   In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

// Good luck!

function repeats(arr){
    //..
      let singles = []
      for (let i = 0 ; i < arr.length ; i++) {
        let check = arr[i]
        let checkArr = []
        for (let j = 0 ; j < arr.length ; j++) {
          if (arr[j] == arr[i]) {
            checkArr.push(arr[j])
          }
        }
        if (checkArr.length == 1) singles.push(checkArr[0])
      }
      return singles.reduce((acc,c)=>acc+c)
    };




// Give me a Diamond

// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

function diamond(n){
    if (n%2==0 || n < 1) return null
    let count = n
    let spaceCount = 0
    let maxW = '*'.repeat(n)
    let diam = [maxW]
    while (diam.length < n) {
      count -= 2
      spaceCount++
      let narrower = '*'.repeat(count)
      while (narrower.length < count+1) {
        narrower = ' '.repeat(spaceCount) + narrower
      }
      diam.push(narrower);
      diam.unshift(narrower)
    }
    return diam.join('\n') + '\n';
  }
  
  //Params - n is a number that is the max width of the diamond
  //Returns - return a string that will make a diamond shape of '*' from 1 to n width
  //Examples - n=1 returns '*\n', n=5 returns '   *\n ***\n*****\n ***\n  *\n'
  //Pseudo - first i tried to make it as a string but this time i'm gonna try to make it as
  //        an array and then return array.join('\n')