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