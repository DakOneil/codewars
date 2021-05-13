// Days in the year

// A variation of determining leap years, assuming only integers are used and years can be negative and positive.

// Write a function which will return the days in the year and the year entered in a string. For example 2000, entered as an integer, will return as a string 2000 has 366 days

// There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.

// Also the basic rule for validating a leap year are as follows

// Most years that can be divided evenly by 4 are leap years.

// Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.

// So the years 0, -64 and 2016 will return 366 days. Whilst 1974, -10 and 666 will return 365 days.

function yearDays(year)
{
  //your code here
  if (year%400==0) {
    return `${year} has 366 days`
  }
  else if (year%4==0 && year%100!=0) {
    return `${year} has 366 days`
  }
  else {
    return `${year} has 365 days`
  }
}




// Contamination #1 -String-

// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

function contamination(text, char){
    // Code here ;)
    if (!text || !char) {
      return ''
    }
    else {
      return char.repeat(text.length)
    }
  }




//   Training JS #14: Methods of Number object--toString() and toLocaleString()

//   Task
// Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.

// Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

// the color code should starting with "#". and then use 2 characters per color.

// for example:

// colorOf(255,0,0) should return "#ff0000"
// colorOf(0,111,0) should return "#006f00"
// colorOf(1, 2 ,3) should return "#010203"

function colorOf(r,g,b){
    //coding here
    let R = r.toString(16)
    if (R.length ==1) R = 0 + R
    let G = g.toString(16)
    if (G.length ==1) G = 0 + G
    let B = b.toString(16)
    if (B.length ==1) B = 0 + B
    return `#${R}${G}${B}`
  }

  


//   Be Concise I - The Ternary Operator

//   You are given a function describeAge / describe_age that takes a parameter age (which will always be a positive integer) and does the following:

// If the age is 12 or lower, it return "You're a(n) kid"
// If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
// If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
// If the age is 65 or above, it return "You're a(n) elderly"
// Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

// I'll give you a few hints:

// The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you have not heard of!
// Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? ;) Perhaps we can shorten it?
// Write everything in one line, \n and other whitespaces counts.
// Whatever you do, do not change what the function does. Good luck :)

function describeAge(age){return age<13?"You're a(n) kid":age<18?"You're a(n) teenager":age<65?"You're a(n) adult":"You're a(n) elderly"}

