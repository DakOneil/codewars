// Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()

// Task
// Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.

// We translate the sentence into an alien language according to the following rules:

// Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)

// for example:

// alienLanguage("My name is John") should return "My NAMe Is JOHn"
// alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
// alienLanguage("Hello World") should return "HELLo WORLd"
// A small hint: The first conversion of the entire string will make the code easier

function alienLanguage(str){
    //coding here...
    return str.split(' ').map(w=>{
      return w = w.slice(0,w.length-1).toUpperCase() + w[w.length-1].toLowerCase()
    }).join(' ')
  }




//   Training JS #24: methods of arrayObject---splice() and slice()

//   Task
// Coding in function threeInOne. function accept 1 parameters arr, it's a 1D number array. Your task is to merge each of the 3 elements into 1 elements (sum value) and return the result.

// Note1: You should not modify the original array.

// Note2: Because this is a beginner Kata, and due to the author's mercy ;-), so you do not have to verify the validity of the parameter, and do not worry about the number of elements of the array is not a multiple of 3.

// Example:

// threeInOne( [1,2,3]) should return [6]
// threeInOne( [1,2,3,4,5,6]) should return [6,15]
// threeInOne( [1,2,3,4,5,6,7,8,9]) should return [6,15,24]
// threeInOne( [1,3,5,2,4,6,7,7,7]) should return [9,12,21]

function threeInOne(arr){
    //coding here...
    let sums = []
    for (let i = 1 ; i < arr.length ; i+=3) {
      sums.push(arr[i-1] + arr[i] + arr[i+1])
    }
    return sums
  }




//   Training JS #22: Unlock new skills--Arrow function,spread operator and deconstruction

//   Task
// Create a function shuffleIt. The function accepts two or more parameters. The first parameter arr is an array of numbers, followed by an arbitrary number of numeric arrays. Each numeric array contains two numbers, which are indices for elements in arr (the numbers will always be within bounds). For every such array, swap the elements. Try to use all your new skills: arrow functions, the spread operator, destructuring, and rest parameters.

// Example:

// shuffleIt([1,2,3,4,5],[1,2]) should return [1,3,2,4,5]
// shuffleIt([1,2,3,4,5],[1,2],[3,4]) should return [1,3,2,5,4]
// shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) should return [1,3,5,2,4]

function shuffleIt(arr,...a){
    //coding here...
    for (let i = 0 ; i < a.length ; i++) {
      [arr[a[i][0]], arr[a[i][1]]] = [arr[a[i][1]], arr[a[i][0]]]
    }
    return arr
  }