// Training JS #32: methods of Math---round() ceil() and floor()

// Task
// Coding in function roundIt. function accept 1 parameter n. It's a number with a decimal point. Please use different methods based on the location of the decimal point, turn the number into an integer.

// If the decimal point is on the left side of the number (that is, the count of digits on the left of the decimal point is less than that on the right), Using ceil() method.

// roundIt(3.45) should return 4
// If the decimal point is on the right side of the number (that is, the count of digits on the left of the decimal point is more than that on the right), Using floor() method.

// roundIt(34.5) should return 34
// If the decimal point is on the middle of the number (that is, the count of digits on the left of the decimal point is equals that on the right), Using round() method.

// roundIt(34.56) should return 35

function roundIt(n){
    //coding here...
    let arr = n.toString().split('.')
    let str1 = arr[0]
    let str2 = arr[1]
    if (str1.length > str2.length){return Math.floor(n)}
    else if (str2.length > str1.length) {return Math.ceil(n)}
    else {return Math.round(n)}
  }




//   Training JS #29: methods of arrayObject---concat() and join()

//   Task
//   Coding in function bigToSmall. function accept 1 parameter arr(2D number array).
  
//   Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array.
  
//   And then sort array in descending order.
  
//   Finally, use the separator ">" to connect the elements into a string.
  
//   Don't complain about the situation like 1>1 is not reasonable, it is just a separator.
  
//   Some example:
  
//   bigToSmall([[1,2],[3,4],[5,6]]) should return "6>5>4>3>2>1"
//   bigToSmall([[1,3,5],[2,4,6]]) should return "6>5>4>3>2>1"
//   bigToSmall([[1,1],[1],[1,1]]) should return "1>1>1>1>1"

function bigToSmall(arr){
    //coding here...
    let a = []
    for (let i = 0 ; i < arr.length ; i++) {
      a = a.concat(arr[i])
    }
    a = a.sort((b,c)=>c-b)
    return a.join('>')
  }




//   Take an Arrow to the knee, Functionally

//   Arrow style Functions
// Come here to practice the Arrow style functions Not much else to say good luck!
// Details
// You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

// Examples
// These are example of how to convert a number to an ascii Character:
// Javascript => String.fromCharCode(97) // a
// C# => Tools.FromCharCode(97) // a

  var ArrowFunc = function(arr) {
    return arr.map( x => String.fromCharCode(x)).join(''); //Complete this function
  }