// Find the vowels

//We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

function vowelIndices(word){
    //your code here
    let vowels = 'aeiouy'
    let arr = []
    for (let i = 0 ; i < word.length ; i++) {
      if (vowels.includes(word.toLowerCase()[i])) {arr.push(i+1)}
    } return arr
  }




//   Moves in squared strings (I)

//   This kata is the first of a sequence of four about "Squared Strings".

// You are given a string of n lines, each substring being n characters long: For example:

// s = "abcd\nefgh\nijkl\nmnop"

// We will study some transformations of this square of strings.

// Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
// vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
// Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
// hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"
// or printed:

// vertical mirror   |horizontal mirror   
// abcd --> dcba     |abcd --> mnop 
// efgh     hgfe     |efgh     ijkl 
// ijkl     lkji     |ijkl     efgh 
// mnop     ponm     |mnop     abcd 
// Task:
// Write these two functions
// and

// high-order function oper(fct, s) where

// fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

// Examples:
// s = "abcd\nefgh\nijkl\nmnop"
// oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
// oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"
// Note:
// The form of the parameter fct in oper changes according to the language. You can see each form according to the language in "Sample Tests".

// Bash Note:
// The input strings are separated by , instead of \n. The output strings should be separated by \r instead of \n. See "Sample Tests".

function vertMirror(strng) {
    // Your code
  let arr = strng.split('\n')
  for (let i = 0 ; i < arr.length ; i++) {
    arr[i] = arr[i].split('').reverse().join('')
  }
  return arr.join('\n')
}
function horMirror(strng) {
    // Your code
  let arr = strng.split('\n').reverse()
  return arr.join('\n')
}
function oper(fct, s) {
    // Your code
  return fct(s)
}





// Substituting Variables Into Strings: Padded Numbers

// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

function solution(value){
    //...
    let str = '' + value
    while (str.toString().length < 5) {
      str = '0' + str
    }
    return `Value is ${str}`
  }






// Vasya - Clerk (6kyu)

// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

// Examples:
// tickets([25, 25, 50]) // => YES 
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

function tickets(peopleInLine){
  // ...
  let till = {
    '25': 0,
    '50': 0, 
    '100': 0
  }
  let arr = []
  for (let i = 0 ; i < peopleInLine.length ; i++) {
    if (peopleInLine[i] == 100 && (till['25']>=1 && till['50']>=1)) {
      arr.push("YES");
      till['25']--;
      till['50']--;
      till['100']++;
    }
    else if (peopleInLine[i] == 100 && (till['25']>=3)) {
      arr.push("YES");
      till['25']-=3;
      till['100']++;
    }
    else if (peopleInLine[i] == 50 && till['25']>=1) {
      arr.push("YES");
      till['25']--;
      till['50']++;
    } 
    else if (peopleInLine[i] ==25) {
      arr.push("YES")
      till['25']++;
    } 
    else arr.push("NO") 
  }
   return arr.includes("NO") ? "NO" : "YES"
}

// do the bills in the till add up to the next 
// personInLine's bill -25?

// make a till object that has a count of all the bills
// run a loop to add in the counts
// run a loop that checks each peopleInLine value -25
// to see if it can return the correct bills





// Delete occurrences of an element if it occurs more than n times

// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit during the session if they show the same motive at most N times. Luckily, Alice and Bob are able to encode the motive as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

// Example
//   deleteNth ([1,1,1,1],2) // return [1,1]
  
//   deleteNth ([20,37,20,21],1) // return [20,37,21]

function deleteNth(arr,n){
  // ...
  let obj = {}
  let newArr = []
  for (let i = 0 ; i < arr.length ; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
      newArr.push(arr[i])
    }
    else if (obj[arr[i]] < n) {
      obj[arr[i]]++;
      newArr.push(arr[i])
    }
  }
  return newArr
}
// P: an arr of nums and a num that is the max count
// R: an array from arr that contains the same nums minus any extra
// E:
// P: create an object 
// loop through the array adding the number and its count to the object
// adding each arr[i] to the new array until the count value is equal to N
// return new array





// Bouncing Balls

// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).

function bouncingBall(h,  bounce,  window) {
  // your code here
  if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) {
    return -1
  }
  else {
    let count = 1
    while (h * bounce > window) {
      count += 2;
      h *= bounce
    }
    return count
  }
}




// Consecutive strings

// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Note
// consecutive strings : follow one after another without an interruption

function longestConsec(strarr, k) {
  // your code
if (strarr.length == 0 || k == 0 || k > strarr.length) return ''
let str = ''
for (let i = 0 ; i < strarr.length-(k-1) ; i++) {
  let testStr = ''
  for (let j = 0 ; j < k ; j++) {
    testStr += strarr[j+i]
  }
  if (testStr.length > str.length) str = testStr
}
return str
}




// Rot13

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
  //your code here
  let ab = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
  let AB = ab.toUpperCase()
  let str = ''
  for (let i = 0 ; i < message.length ; i++ ){
    if (ab.includes(message[i])) {
      str += ab[ab.indexOf(message[i])+13]
    } else if (AB.includes(message[i])) {
      str += AB[AB.indexOf(message[i])+13]
    } else {
      str += message[i]
    }
  }
  return str
}