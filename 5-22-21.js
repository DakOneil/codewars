// Training JS #31: methods of arrayObject---isArray() indexOf() and toString()

// Task
// Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

// If arr is not an array, function should return:

// "It's a fake array"
// If arr contains elements 5 and 13, function should return:

// "It's a black array"
// If arr contains neither 5 nor 13, function should return:

// "It's a white array"

function blackAndWhite(arr){
    //coding here...
    if (!Array.isArray(arr)) return "It's a fake array"
    else {
     if (arr.indexOf(5)>=0 && arr.indexOf(13)>=0) return "It's a black array"
     else return "It's a white array" 
    }
  }




//   Be Concise III - Sum Squares

//   You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. 

  function sumSquares(array) {
    return array.map(x=>{return x**2}).reduce((acc,c)=>acc+c)
  }



//   Freudian translator

//   You probably know the 42 number as "The answer to life, the universe and everything" according to Douglas Adams' "The Hitchhiker's Guide to the Galaxy". For Freud, the answer was quite different.

// In the society he lived in, people-women in particular- had to repress their sexual needs and desires. This was simply how the society was at the time. Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.

// Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was basically related to, and explained by sex.

// In this kata, the toFreud() function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should result in the ouput being ""(empty string).

function toFreud(string) {
    if (!string) return string
    let arr = string.split(' ')
    for (let i = 0 ; i < arr.length ; i++) {
      arr[i] = 'sex'
    }
    return arr.join(' ')
  }