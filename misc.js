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






//   Folding your way to the moon

//   Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you have, but exactly how many? Maybe it's time to write a program to figure it out.

//   You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
//   (If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)
  
//   Note: Of course you can't do half a fold. You should know what this means ;P
  
//   Also, if somebody is giving you a negative distance, it's clearly bogus and you should yell at them by returning null (or whatever equivalent in your language. In Shell please return None).

function foldTo(distance) {
    let foldCount = 0
    let thickness = 0.0001
    while (thickness < distance) {
      foldCount++
      thickness*=2
    }
    return distance >= 0 ? foldCount : null
  }
  
  /*
  declare a foldCount variable and assign it to 0
  declare a thickness variable and assign it to 0.0001
  run a while loop that will double the thickness every loop and increase the foldCount by one
      until the thickness is >= distance
  */




// In class problem from 7-9-21

// Given two arrays of strings, return the number of times each string of the second array appears in the first array.

// Example
// array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
// array2 = ['abc', 'cde', 'uap']

// Test.assertDeepEquals(solve(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap']), [2, 1, 0]);
// Test.assertDeepEquals(solve(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz']), [2, 1, 2]);
// Test.assertDeepEquals(solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox']), [2, 0, 1]);

function howManyTimes(arr1, arr2) {
  return arr2.map(x=> arr1.filter(y=>y==x).length)
}




// Remove consecutive duplicate words

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = s => s.split(' ').filter((el,i,arr)=> el != arr[i+1]).join(' ')





// Alternate case

// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

function alternateCase(s) {
  return s.split('').map((el)=> {
    if (el == el.toUpperCase()) return el.toLowerCase()
    else if (el == el.toLowerCase()) return el.toUpperCase()
  }).join('')
}




// Write Number in Expanded Form - Part 2
// This is version 2 of my 'Write Number in Exanded Form' Kata.

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(1.24); // should return '1 + 2/10 + 4/100'
// expandedForm(7.304); // should return '7 + 3/10 + 4/1000'
// expandedForm(0.04); // should return '4/100'

function expandedForm(num) {
  // Your code here
  num = num.toString()
  let whole = num.split('.')[0]
  let dec = num.split('.')[1]
  let arr = []
  if (whole > 0) {
    for (let i = 0 ; i < whole.length ; i++) {
      if (whole[i] > 0) {
        arr.push(whole[i] + '0'.repeat(whole.slice(i+1).length))
      }
    }
  }
  for (let i = 0 ; i < dec.length ; i++) {
    if (dec[i] > 0) {
      arr.push(dec[i] + '/' + (10**(i+1)))
    }
  }
  return arr.join(' + ')
}





// Strip Comments

// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

function solution(input, markers) {
  let strArr = input.split('\n')
  let stripped = strArr.map(el=> {
    let ind 
    for (let i = 0; i < markers.length ; i++) {
      if (el.includes(markers[i])) {
        ind = el.indexOf(markers[i])
      }
    }
    return el = el.slice(0,ind).trim()
  })
  return stripped.join('\n')
};




// Jumping Number (Special Numbers Series #4)

// Definition
// Jumping number is the number that All adjacent digits in it differ by 1.

// Task
// Given a number, Find if it is Jumping or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .

// Return the result as String .

// The difference between ‘9’ and ‘0’ is not considered as 1 .

// All single digit numbers are considered as Jumping numbers.

// Input >> Output Examples
// jumpingNumber(9) ==> return "Jumping!!"
// Explanation:
// It's single-digit number
// jumpingNumber(79) ==> return "Not!!"
// Explanation:
// Adjacent digits don't differ by 1
// jumpingNumber(23) ==> return "Jumping!!"
// Explanation:
// Adjacent digits differ by 1
// jumpingNumber(556847) ==> return "Not!!"
// Explanation:
// Adjacent digits don't differ by 1
// jumpingNumber(4343456) ==> return "Jumping!!"
// Explanation:
// Adjacent digits differ by 1
// jumpingNumber(89098) ==> return "Not!!"
// Explanation:
// Adjacent digits don't differ by 1
// jumpingNumber(32) ==> return "Jumping!!"
// Explanation:
// Adjacent digits differ by 1

function jumpingNumber(n){
  //your code here
  let str = n.toString()
  let arr = str.split('')
  
  let diffs = arr.map((el,i,a)=> {
    return Math.abs(el-arr[i+1])
  })
  diffs.pop()
  if (diffs.every(x=>x==1)) return "Jumping!!"
  else return "Not!!"
}





// Divide and Conquer

// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

function divCon(x){
  let stringTotal = 0
  let numTotal = 0
  for (let i = 0 ; i < x.length ; i++) {
    if (typeof x[i] == 'string') stringTotal += Number(x[i])
    else numTotal += x[i]
  }
  return numTotal - stringTotal
}



// Bumps in the Road

// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

function bump(x) {
  return !x.match(/n/g) ? "Woohoo!" : x.match(/n/g).length <= 15 ? "Woohoo!" : "Car Dead"
}




// Cat and Mouse - Easy Version

// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

// C.....m returns 'Escaped!' <-- more than three characters between

// C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

function catMouse(x){
  let mPos = x.indexOf('m')
  let cPos = x.indexOf('C')
  let diff = Math.abs(mPos - cPos) - 1
  return diff > 3 ? "Escaped!" : "Caught!"
}





// Sum of Cubes

// Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples:

// sumCubes(2) // 9
// sum of the cubes of 1 and 2 is 1 + 8

function sumCubes(n){
  // ...
  let arr = []
  for (let i = 1 ; i <= n ; i++) {
    arr.push(i)
  }
  return arr.reduce((acc, c)=> acc + c**3, 0)
}





// Nth Smallest Element (Array Series #4)

// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array/list [] of integers , Find the Nth smallest element in this array of integers

// Notes
// Array/list size is at least 3 .

// Array/list's numbers could be a mixture of positives , negatives and zeros .

// Repetition in array/list's numbers could occur , so don't Remove Duplications .

// Input >> Output Examples
// nthSmallest({3,1,2} ,2) ==> return (2) 
// Explanation:
// Since the passed number is 2 , Then * the second smallest element in this array/list is 2*

// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// Explanation:
// Since the passed number is 3 , Then * the third smallest element in this array/list is 7*

// nthSmallest({2,169,13,-5,0,-1} ,4) ==> return (2) 
// Explanation:
// Since the passed number is 4 , Then * the fourth smallest element in this array/list is 2*

// nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) 
// Explanation:
// Since the passed number is 5 , Then * the fifth smallest element in this array/list is 92*

// Playing with Numbers Series
// Playing With Lists/Arrays Series
// For More Enjoyable Katas
// ALL translations are welcomed
// Enjoy Learning !!
// Zizou

function nthSmallest(arr, pos){
  //your code here
  return arr.sort((a,b)=>a-b)[pos-1]
}




// Balanced Number (Special Numbers Series #1 )

// Definition
// Balanced number is the number that * The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.

// Task
// Given a number, Find if it is Balanced or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// If the number has an odd number of digits then there is only one middle digit, e.g. 92645 has middle digit 6; otherwise, there are two middle digits , e.g. 1301 has middle digits 3 and 0

// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g 413023 is a balanced number because the left sum and right sum are both 5.

// Number passed is always Positive .

// Return the result as String

// Input >> Output Examples
// (balanced-num 7) ==> return "Balanced"
// Explanation:
// Since , The sum of all digits to the left of the middle digit (0)

// and the sum of all digits to the right of the middle digit (0) are equal , then It's Balanced

// (balanced-num 295591) ==> return "Not Balanced"
// Explanation:
// Since , The sum of all digits to the left of the middle digits (11)

// and the sum of all digits to the right of the middle digits (10) are Not equal , then It's Not Balanced

// Note : The middle digit(s) are 55 .

// (balanced-num 959) ==> return "Balanced"
// Explanation:
// Since , The sum of all digits to the left of the middle digits (9)

// and the sum of all digits to the right of the middle digits (9) are equal , then It's Balanced

// Note : The middle digit is 5 .

// (balanced-num 27102983) ==> return "Not Balanced"
// Explanation:
// Since , The sum of all digits to the left of the middle digits (10)

// and the sum of all digits to the right of the middle digits (20) are Not equal , then It's Not Balanced

// Note : The middle digit(s) are 02 .

// Playing with Numbers Series
// Playing With Lists/Arrays Series
// For More Enjoyable Katas
// ALL translations are welcomed
// Enjoy Learning !!
// Zizou

function balancedNum(number)
{
  let str = number.toString()
  if (str.length ==1 || str.length ==2) return "Balanced"
  else if (str.length % 2 == 0) {
    let left = str.slice(0,(str.length/2)-1).split('').reduce((acc,c)=> acc + +c,0)
    let right = str.slice((str.length/2) +1).split('').reduce((acc,c)=> acc + +c,0)
    if (left === right) return "Balanced"
    else return "Not Balanced"
  } else {
    let left = str.slice(0,Math.floor(str.length/2)).split('').reduce((acc,c)=> acc + +c,0)
    let right = str.slice(Math.ceil(str.length/2)).split('').reduce((acc,c)=> acc + +c,0)
    if (left === right) return "Balanced"
    else return "Not Balanced"
  }
}




// Grouped by commas

// Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

// Assume: 0 <= n < 2147483647

// Examples
//        1  ->           "1"
//       10  ->          "10"
//      100  ->         "100"
//     1000  ->       "1,000"
//    10000  ->      "10,000"
//   100000  ->     "100,000"
//  1000000  ->   "1,000,000"
// 35235235  ->  "35,235,235"

function groupByCommas(n) {
  return n.toLocaleString()
}





// Special Number (Special Numbers Series #5)

// Definition
// A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

// Given a number determine if it special number or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// The number passed will be positive (N > 0) .

// All single-digit numbers with in the interval [0:5] are considered as special number.

// Input >> Output Examples
// specialNumber(2) ==> return "Special!!"
// Explanation:
// It's a single-digit number within the interval [0:5] .

// specialNumber(9) ==> return "NOT!!"
// Explanation:
// Although, it's a single-digit number but Outside the interval [0:5] .

// specialNumber(23) ==> return "Special!!"
// Explanation:
// All the number's digits formed from the interval [0:5] digits .

// specialNumber(39) ==> return "NOT!!"
// Explanation:
// Although, there is a digit (3) Within the interval But the second digit is not (Must be ALL The Number's Digits ) .

// specialNumber(59) ==> return "NOT!!"
// Explanation:
// Although, there is a digit (5) Within the interval But the second digit is not (Must be ALL The Number's Digits ) .

// specialNumber(513) ==> return "Special!!"
// specialNumber(709) ==> return "NOT!!"
// For More Enjoyable Katas
// ALL translation are welcomed
// Enjoy Learning !!
// Zizou

function specialNumber(n){
  //your code here
  return n.toString().match(/[6-9]/g) === null ? 'Special!!' : 'NOT!!'
}




// Automorphic Number (Special Numbers Series #6)

// Definition
// A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

// Task
// Given a number determine if it Automorphic or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// The number passed to the function is positive
// Input >> Output Examples
// autoMorphic (25) -->> return "Automorphic" 
// Explanation:
// 25 squared is 625 , Ends with the same number's digits which are 25 .
// autoMorphic (13) -->> return "Not!!"
// Explanation:
// 13 squared is 169 , Not ending with the same number's digits which are 69 .
// autoMorphic (76) -->> return "Automorphic"
// Explanation:
// 76 squared is 5776 , Ends with the same number's digits which are 76 .
// autoMorphic (225) -->> return "Not!!"
// Explanation:
// 225 squared is 50625 , Not ending with the same number's digits which are 225 .
// autoMorphic (625) -->> return "Automorphic"
// Explanation:
// 625 squared is 390625 , Ends with the same number's digits which are 625 .
// autoMorphic (1) -->> return "Automorphic"
// Explanation:
// 1 squared is 1 , Ends with the same number's digits which are 1 .
// autoMorphic (6) -->> return "Automorphic"
// Explanation:
// 6 squared is 36 , Ends with the same number's digits which are 6
// Playing with Numbers Series
// Playing With Lists/Arrays Series
// For More Enjoyable Katas
// ALL translations are welcomed
// Enjoy Learning !!
// Zizou

function automorphic(n){
  //your code here
  let digits = n.toString()
  let squareDigits = (n**2).toString()
  return digits === squareDigits.slice((squareDigits.length-digits.length)) ? 'Automorphic' : 'Not!!'
}





// Extra Perfect Numbers (Special Numbers Series #7)

// Definition
// Extra perfect number is the number that first and last bits are set bits.

// Task
// Given a positive integer N , Return the extra perfect numbers in range from 1 to N .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .

// Returned array/list should contain the extra perfect numbers in ascending order from lowest to highest

// Input >> Output Examples
// extraPerfect(3)  ==>  return {1,3}
// Explanation:
// (1)10 =(1)2
// First and last bits as set bits.

// (3)10 = (11)2
// First and last bits as set bits.

// extraPerfect(7)  ==>  return {1,3,5,7}
// Explanation:
// (5)10 = (101)2
// First and last bits as set bits.

// (7)10 = (111)2
// First and last bits as set bits.

// Playing with Numbers Series
// Playing With Lists/Arrays Series
// For More Enjoyable Katas
// ALL translations are welcomed
// Enjoy Learning !!
// Zizou

function extraPerfect(n){
  //your code here
  let arr = []
  for (let i = 1 ; i <= n ; i++) {
    if (i%2==1) arr.push(i)
  }
  return arr
}

function extraPerfect(n){
  let arr = []
  for (let i = 1 ; i <= n ; i+=2) {
    arr.push(i)
  }
  return arr
}