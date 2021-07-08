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