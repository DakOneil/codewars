// Product Array (Array Series #5)

// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

// Notes
// Array/list size is at least 2 .

// Array/list's numbers Will be only Positives

// Repetition of numbers in the array/list could occur.

// Input >> Output Examples
// productArray ({12,20}) ==>  return {20,12}
// Explanation:
// The first element in prod [] array 12 is the product of all array's elements except the first element

// The second element 20 is the product of all array's elements except the second element .

// productArray ({1,5,2}) ==> return {10,2,5}
// Explanation:
// The first element 10 is the product of all array's elements except the first element 1

// The second element 2 is the product of all array's elements except the second element 5

// The Third element 5 is the product of all array's elements except the Third element 2.

// productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}
// Explanation:
// The first element 180 is the product of all array's elements except the first element 10

// The second element 600 is the product of all array's elements except the second element 3

// The Third element 360 is the product of all array's elements except the third element 5

// The Fourth element 300 is the product of all array's elements except the fourth element 6

// Finally ,The Fifth element 900 is the product of all array's elements except the fifth element 2

// A more challenging version of this kata by Firefly2002
// Playing with Numbers Series
// Playing With Lists/Arrays Series
// For More Enjoyable Katas
// ALL translations are welcomed
// Enjoy Learning !!
// Zizou

function productArray(numbers){
    //your code here
    return numbers.map((el,i,arr)=> {
      let p = 1
      for (let j = 0 ; j < arr.length ; j++) {
        if (j !== i) {
          p *= arr[j]
        }
      }
      return p
    })
  }




//   Maximum Triplet Sum (Array Series #7)

//   Task
// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

// Notes :
// Array/list size is at least 3 .

// Array/list numbers could be a mixture of positives , negatives and zeros .

// Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

// Input >> Output Examples
// 1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
// Explanation:
// As the triplet that maximize the sum {6,8,3} in order , their sum is (17)

// Note : duplications are not included when summing , (i.e) the numbers added only once .

// 2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
// Explanation:
// As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,
// Note : duplications are not included when summing , (i.e) the numbers added only once .
// 3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
// Explanation:
// As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41) ,
// Note : duplications are not included when summing , (i.e) the numbers added only once .
// Playing with Numbers Series
// Playing With Lists/Arrays Series
// For More Enjoyable Katas
// ALL translations are welcomed
// Enjoy Learning !!
// Zizou

function maxTriSum(numbers){
    //your code here
    let largestNums = []
    let i = 0
    numbers.sort((a,b)=>b-a)
    while(largestNums.length < 3) {
      if (!largestNums.includes(numbers[i])){
        largestNums.push(numbers[i])
      }
      i++
    }
    return largestNums.reduce((acc,c)=>acc+c)
  }





//   Minimum Steps (Array Series #6)

// Task
// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

// Notes:
// List size is at least 3.

// All numbers will be positive.

// Numbers could occur more than once , (Duplications may exist).

// Threshold K will always be reachable.

// Input >> Output Examples
// minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
// Explanation:
// We add two smallest elements (1 + 2), their sum is 3 .

// Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .

// Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this .

// minimumSteps({8 , 9, 4, 2}, 23)  ==> return (3)
// Explanation:
// We add two smallest elements (4 + 2), their sum is 6 .

// Then we add the next smallest number to it (6 + 8) , so the sum becomes 14 .

// Now we add the next smallest number (14 + 9) , so the sum becomes 23 .

// Now the result is greater or equal to 23 , Hence the output is (3) i.e (3) operations are required to do this .

// minimumSteps({19,98,69,28,75,45,17,98,67}, 464)  ==>  return (8)
// Explanation:
// We add two smallest elements (19 + 17), their sum is 36 .

// Then we add the next smallest number to it (36 + 28) , so the sum becomes 64 .

// We need to keep doing this until the sum becomes greater or equal to K (464 in this case), which will require 8 Steps .

// Expected Time Complexity O(n Log n)
// Playing with Numbers Series
// Playing With Lists/Arrays Series
// For More Enjoyable Katas
// ALL translations are welcomed
// Enjoy Learning !!
// Zizou

function minimumSteps(numbers, value){
    //your code here
    numbers.sort((a,b)=>a-b)
    let sumArr = []
    const sum = numArr => numArr.reduce((acc,c)=>acc+c,0)
    for (let i = 0 ; i < numbers.length ; i++) {
      sumArr.push(numbers[i])
      if (sum(sumArr) >= value) {
        return sumArr.length -1
      }
    }
  }