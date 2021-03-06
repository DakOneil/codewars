// Find the force of gravity between two objects

// Your job is to find the gravitational force between two spherical objects (obj1 , obj2).

// input
// Two arrays are given :

// arr_val (value array), consists of 3 elements
// 1st element : mass of obj 1
// 2nd element : mass of obj 2
// 3rd element : distance between their centers
// arr_unit (unit array), consists of 3 elements
// 1st element : unit for mass of obj 1
// 2nd element : unit for mass of obj 2
// 3rd element : unit for distance between their centers
// mass units are :

// kilogram (kg)
// gram (g)
// milligram (mg)
// microgram (μg)
// pound (lb)
// distance units are :

// meter (m)
// centimeter (cm)
// millimeter (mm)
// micrometer (μm)
// feet (ft)
// Note
// value of G = 6.67 x 10-11N.kg–2.m2

// 1ft = 0.3048m

// 1lb = 0.453592kg

// return value must be Newton for force (obviously)

// μ copy this from here to use it in your solution

solution = (arr_val, arr_unit) => {
    // you code goes here
    let obj1 = arr_val[0]
    let obj2 = arr_val[1]
    let r = arr_val[2]
    let G = 6.67 * 10**-11
    
    if (arr_unit[0] == 'lb') obj1 *= 0.453592
    else if (arr_unit[0] == 'μg') obj1 *= 1/1000000000
    else if (arr_unit[0] == 'mg') obj1 *= 1/1000000
    else if (arr_unit[0] == 'g') obj1 *= 1/1000
    
    if (arr_unit[1] == 'lb') obj2 *= 0.453592
    else if (arr_unit[1] == 'μg') obj2 *= 1/1000000000
    else if (arr_unit[1] == 'mg') obj2 *= 1/1000000
    else if (arr_unit[1] == 'g') obj2 *= 1/1000
    
    if (arr_unit[2] == 'ft') r *= 1/.3048
    else if (arr_unit[2] == 'μm') r *= 1/1000000
    else if (arr_unit[2] == 'mm') r *= 1/1000
    else if (arr_unit[2] == 'cm') r *= 1/100
    
    let gravity = G* ((obj1 * obj2)/r**2)
    return gravity 
  };





//   Simple Fun #352: Reagent Formula

//   Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.

// We know the rules of confect:

// material1 and material2 cannot be selected at the same time
// material3 and material4 cannot be selected at the same time
// material5 and material6 must be selected at the same time
// material7 or  material8 must be selected(at least one, or both)
// Task
// You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.

// Example
// For formula = [1,3,7], The output should be true.

// For formula = [7,1,2,3], The output should be false.

// For formula = [1,3,5,7], The output should be false.

// For formula = [1,5,6,7,3], The output should be true.

// For formula = [5,6,7], The output should be true.

// For formula = [5,6,7,8], The output should be true.

// For formula = [6,7,8], The output should be false.

// For formula = [7,8], The output should be true.

// Note
// All inputs are valid. Array contains at least 1 digit. Each digit appears at most once.

// Happy Coding ^_^

function isValid(f){
    //coding and coding..
    if (f.includes(1) && f.includes(2)) return false
    else if (f.includes(3) && f.includes(4)) return false
    else if ((f.includes(5) && !f.includes(6)) || (!f.includes(5) && f.includes(6))) return false
    else if (!f.includes(7) && !f.includes(8)) return false
    else return true
  }




//   Word Count

//   Can you realize a function that returns word count from a given string?

// You have to ensure that spaces in string is a whitespace for real.

// What we want and finish of work:

// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1
// // ... and so on
// What kind of tests we got for your code:

// Function have to count words, but not spaces, so be sure that it does right.
// Empty string has no words.
// String with spaces around should be trimmed.
// Non-whitespace (ex. breakspace, unicode chars) should be assumed as delimiter
// Be sure that words with chars like -, ', ` are counted right.

function countWords(str) {
    // ...
    return !str ? 0 : str.match(/\S+/g) == null ? 0 : str.match(/\S+/g).length
  }





//   Training JS #26: methods of arrayObject---map()

//   Task
// Coding in function isolateIt. function accept 1 parameters arr, it's a string array. Your task is to put a character "|" into the middle of each element.

// If the string length is an even number, use the insert method. for example: "abcd" should became "ab|cd". "|" should be inserted between ab and cd.

// If the string length is an odd number, use the replacement method. for example: "abcde" should became "ab|de". Character c will be replaced by |.

// The original array should not be changed, you need to return a new array(if you use the map method, you do not need to worry about this).

function isolateIt(arr){
    //coding here...
    return arr.map(s=> {
      let l = s.length
      let i
      if (l%2==0) {
        i = l/2
        return s = s.slice(0,i) + '|' + s.slice(i, l)
      } else {
        i = Math.floor(l/2)
        return s = s.slice(0,i) + '|' + s.slice(i+1, l)
      }
    })
  }




//   Training JS #27: methods of arrayObject---filter()

//   Task
// Coding in function countGrade. function accept 1 parameters scores, it's a number array. Your task is to count the grade distribution of the scores, to return an object like this:

function countGrade(scores){
    //coding here...
    let gradeBook = {
      S: scores.filter(v=>{return v>=100}).length,
      A: scores.filter(v=>{return v<100 && v>=90}).length,
      B: scores.filter(v=>{return v<90 && v>=80}).length,
      C: scores.filter(v=>{return v<80 && v>=60}).length,
      D: scores.filter(v=>{return v<60 && v>=0}).length,
      X: scores.filter(v=>{return v==-1}).length,
    }
    return gradeBook
  }