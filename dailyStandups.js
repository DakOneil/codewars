// Square(n) Sum

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

//solution 1
function squareSum(numbers){
    let sum = 0
    for (let i = 0 ; i < numbers.length ; i++) {
      sum += numbers[i]**2
    }
    return sum
  }

  //solution 2
  function squareSum(numbers){
    return numbers.reduce((acc,c)=> acc + c**2, 0)
  }





// Array combinations

// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// See test cases for more examples.

// Good luck!

function solve(arr) {
    function removeDuplicates(array) {
      array.sort((a,b)=>a-b)
      for (let i = 0 ; i < array.length ; i++) {
        if (array[i] == array[i+1]) array.splice(i,1)
      }
    }
    arr.forEach(el=> {
      removeDuplicates(el)
    })
  //   let uniqueArrays = []
  //   for (let i = 0 ; i < arr[0].length ; i++) {
  //     for (let j = 0 ; j < arr[1].length ; j++) {
  //       for (let k = 0 ; k < arr[2].length ; k++) {
  //         uniqueArrays.push(arr[0][i], arr[1][j], arr[2][k])
  //       }
  //     }
  //   }
  //   return uniqueArrays.length / 3 || 0;
    let lengthArr = []
    for (let i = 0 ; i < arr.length ; i++) {
      lengthArr.push(arr[i].length)
    }
    return lengthArr.reduce((acc,c)=>acc*c)
  };
  
  /*
  first i want to remove duplicates from each inner array
  make a function to remove duplicates and run it on each inner array
  declare the uniqueArrays array 
  run a for loop the length of the first inner array
    run a for loop the length of the second inner array
      so on for all inner arrays
        compile all the arr[i,j,k,etc.] values into an array
        push that area to the uniqueArrays
  return the length of the uniqueArrays
  
  As it turns out the number of unique arrays is really simple to calculate.
  It is just the lengths of the inner arrays multiplied together.
  */