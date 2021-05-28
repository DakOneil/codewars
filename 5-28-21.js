// Sum of Odd Cubed Numbers

// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined/None/nil/NULL if any of the values aren't numbers.

function cubeOdd(arr) {
    if (arr.some(x=>typeof x != "number")) return undefined
  // insert code here >.<
    let arr1 = arr.map(x=>x**3)
    let sum = 0
    for (let i =0 ; i < arr1.length ; i++) {
      if (arr1[i] % 2 != 0) sum += arr1[i]
    }
   return sum
  }





  