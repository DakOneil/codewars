// Training JS #13: Number object and its properties

// Task
// Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

// To judge the number n. If n is one of the above five constants, return one of these string:

// "Input number is Number.MAX_VALUE"
// "Input number is Number.MIN_VALUE"
// "Input number is Number.NaN"
// "Input number is Number.NEGATIVE_INFINITY"
// "Input number is Number.POSITIVE_INFINITY"
// Other values should return "Input number is xxx". xxx means this number.

function whatNumberIsIt(n){
    //coding here 
    if (n == 1/0) return "Input number is Number.POSITIVE_INFINITY"
    else if (n == 1.7976931348623157e+308) return "Input number is Number.MAX_VALUE"
    else if (n == 5e-324) return "Input number is Number.MIN_VALUE"
    else if (isNaN(n)) return 'Input number is Number.NaN'
    else if (n == -Number.MAX_VALUE*2) return 'Input number is Number.NEGATIVE_INFINITY'
    else return `Input number is ${n}`
  }





//   Closest elevator

//   Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator
// It should return the name of the elevator closest to the called floor ("left"/"right").

// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

// You can assume that the inputs will always be valid integers between 0-2.

function elevator(left, right, call){
  // code on! :)
  let leftDis = Math.abs(call-left)
  let rightDis = Math.abs(call-right)
  return leftDis < rightDis ? 'left' : 'right'
}




// Return to Sanity

// This function should return an object, but it's not doing what's intended. What's wrong?

function mystery() {
  var results =
    {sanity: 'Hello'};
  return results;
}




// Unexpected parsing

// Here is a piece of code:

// function getStatus(isBusy) {
//   var msg = (isBusy ? "busy" : "available");
//   return 
//   {
//     status: msg
//   }
// }
// Expected Behaviour
// Function should return a dictionary/Object/Hash with "status" as a key, whose value can : "busy" or "available" depending on the truth value of the argument is_busy.

// But as you will see after clicking RUN or ATTEMPT this code has several bugs, please fix them.

function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  let state = 
  {
    status: msg
  }
  return state
}



// Broken Counter

// Our counter prototype is broken. Can you spot, what's wrong here?

function Counter() {
  this.value = 0;
}

Counter.prototype.increase = function() {
  this.value++;
};

Counter.prototype.getValue = function() {
  return this.value;
};

Counter.prototype.reset = function() {
  this.value = 0;
};




// Draw stairs

// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in:

// "I\n I\n  I"
// or printed:

// I
//  I
//   I

  function drawStairs(n) {
    // your code here
    let arr = []
    for (let i = 0 ; i < n ; i++) {
      let space = ' '.repeat(i)
      arr.push(space + 'I')
    }
    return arr.join('\n')
  }




  // Shifty Closures

  // Functional closures can get overly attached. Set them straight!

// Why doesn't greet_abe() actually greet Abe?

var greet_abe = function() {
  var name = 'Abe';
  return "Hello, " + name + '!';
};

var greet_ben = function() {
  var name = 'Ben';
  return "Hello, " + name + '!';
};


