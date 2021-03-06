// Count characters in your string

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  
    // The function code should be here
    let obj = {}
    for (let i = 0 ; i < string.length ; i++) {
      if (!obj[string[i]]) {
        obj[string[i]] = 1
      } else {
        obj[string[i]]++
      }
    }
    return obj
  }



//   Title Case

//   A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

function titleCase(title, minorWords) {
    let str = ''
    title = title.split(' ')
    str += title[0].slice(0,1).toUpperCase() + title[0].slice(1,title[0].length).toLowerCase() + ' '
    title.shift()
    if (!minorWords) {
      for (let i = 0 ; i < title.length ; i++) {
        str += title[i].slice(0,1).toUpperCase() + title[i].slice(1,title[i].length).toLowerCase() + ' '
      }
    } else {  
    for (let i = 0 ; i < title.length ; i++) {
        if (minorWords.toLowerCase().split(' ').includes(title[i].toLowerCase())) str += title[i].toLowerCase() + ' '
        else {
        str += title[i].slice(0,1).toUpperCase() + title[i].slice(1,title[i].length).toLowerCase() + ' '
        }
      }
    }
    return str.trim()
  }
  



//   The Coupon Code

//   Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

function checkCoupon(eCode, cCode, currentDate, expirationDate){
    let eDate = new Date(expirationDate)
    let cDate = new Date(currentDate)
    if (eCode === cCode && eDate >= cDate) return true
    else return false
  }




// Implement Array.prototype.filter()

// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

// The usage will be quite simple, like:

// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
// Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.

Array.prototype.filter = function (func) {
  //nothing here, you will feel pretty awesome to write down by yourself
  //have fun :)
  let arr = []
  for (let i =0 ; i < this.length ;i++ ){
    if(func(this[i])) {
      arr.push(this[i])
    }
  }
  return arr
}




//FIRST TRYYYYYYY
// Enumerable Magic #1 - True for All?

// Create a method all which takes an array and a predicate (function pointer), and returns true if the predicate returns true for every element in the array. Otherwise, it should return false. If the array is empty, it should return true, since technically nothing failed the test.

function all( arr, fun ){
  // ...
  return arr.filter(n=>fun(n)).length == arr.length
}




// The Supermarket Queue

// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

function queueTime(customers, n) {
  if (customers.length == 0) return 0
  if (n==1) return customers.reduce((acc,c)=>acc+c,0)
  else {
    let tills = []
    for (let i = 0 ; i < customers.length ; i++) {
      while (tills.length < n) {
        if (customers[0]) {
          tills.push(customers[0])
          customers.shift()
        } else break
      }
      for (let i = 0 ; i < customers.length ; i++) {
        tills.sort((a,b)=>a-b)
        tills[0] += customers[0]
        customers.shift()
        i--
      }
      return tills.sort((a,b)=>b-a)[0]
    }
  }
}




// Encrypt this!

// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter needs to be converted to its ASCII code.
// The second letter needs to be switched with the last letter
// Keepin' it simple: There are no special characters in input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function(text) {
  // Implement me! :)
  let arr = text.split(' ')
    for (let i = 0 ; i < arr.length ; i++) {
      let first = arr[i].charCodeAt(0).toString()
      let second = arr[i][arr[i].length-1]
      let middle = arr[i].slice(2,arr[i].length-1)
      let last = arr[i][1]
      if (arr[i].length == 1) {
        arr[i] = first
      } else if (arr[i].length == 2) {
        arr[i] = first + last
      }
      else {
        arr[i] = first + second + middle + last
      }
    }
    return arr.join(' ')
  }