// Squares sequence

// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

// Examples
// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]

function squares(x, n) {
    let arr = [x]
    for (let i = 0 ; i < n -1 ; i++) {
      arr.push(arr[i]**2)
    }
    return n > 0 ? arr : []
  }




//   Strong Number (Special Numbers Series #2)

//   Definition
// Strong number is the number that the sum of the factorial of its digits is equal to number itself.

// For example: 145, since
// 1! + 4! + 5! = 1 + 24 + 120 = 145
// So, 145 is a Strong number.

// Task
// Given a number, Find if it is Strong or not.

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive.
// Return the result as String
// Input >> Output Examples
// strong_num(1) ==> return "STRONG!!!!"
// Explanation:
// Since , the sum of its digits' factorial of (1) is equal to number itself (1) , Then its a Strong .

// strong_num(123) ==> return "Not Strong !!"
// Explanation:
// Since the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself (123) , Then it's Not Strong .

// strong_num(2)  ==>  return "STRONG!!!!"
// Explanation:
// Since the sum of its digits' factorial of 2! = 2 is equal to number itself (2) , Then its a Strong .

// strong_num(150) ==> return "Not Strong !!"
// Explanation:
// Since the sum of its digits' factorial of 1! + 5! + 0! = 122 is not equal to number itself (150), Then it's Not Strong .

// Playing with Numbers Series
// Playing With Lists/Arrays Series
// For More Enjoyable Katas
// ALL translations are welcomed
// Enjoy Learning !!
// Zizou

function strong(n) {
    let numArr = n.toString().split('').map(el=> +el)
    let factorials = numArr.map(el=> {
      let f = 1
      for (let i = el ; i > 0 ; i--) {
        f *= i
      }
      return f
    })
    return factorials.reduce((acc,c)=>acc+c, 0) === n ? "STRONG!!!!" : "Not Strong !!" ;
  }