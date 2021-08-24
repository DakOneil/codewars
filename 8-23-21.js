// Discover The Original Price

// We need to write some code to return the original price of a product, the return type must be of type decimal and the number must be rounded to two decimal places.

// We will be given the sale price (discounted price), and the sale percentage, our job is to figure out the original price.

// For example:
// Given an item at $75 sale price after applying a 25% discount, the function should return the original price of that item before applying the sale percentage, which is ($100.00) of course, rounded to two decimal places.

// DiscoverOriginalPrice(75, 25) => 100.00M where 75 is the sale price (discounted price), 25 is the sale percentage and 100 is the original price

function discoverOriginalPrice(discountedPrice, salePercentage){
    // ...
    return +(discountedPrice / (1- salePercentage/100)).toFixed(2)
  }




  //SevenAte9

//   Write a function that removes every lone 9 that is inbetween 7s.

// sevenAte9('79712312') => '7712312'
// sevenAte9('79797') => '777'

function sevenAte9(str){
    return str.split('').map((el,i,a)=> {
      if (el==9 && a[i-1] == 7 && a[i+1] == 7) {
        return ''
      } else {
        return el
      }
    }).join('')
  }





  //Number of Decimal Digits

//   Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

function digits(n) {
    // code goes here
    return n.toString().length
  }





//   Word values

// Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ....z = 26.

// You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.

// nameValue ["abc","abc abc"] should return [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.

// "abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.

// Input will only contain lowercase characters and spaces.

// Good luck!

// If you like this Kata, please try:

// String matchup

// Consonant value

function wordValue(a) {
    const aB = '0abcdefghijklmnopqrstuvwxyz'
    return a.map((el,i,arr)=> {
      return el.split('').filter(x=>aB.includes(x)).map(elem=> {
        if (aB.includes(elem)) {
            return aB.indexOf(elem)
          }else {return 0}
      }).reduce((acc,c)=>acc+c,0) *(i+1)
    })
  }