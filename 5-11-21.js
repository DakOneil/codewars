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





