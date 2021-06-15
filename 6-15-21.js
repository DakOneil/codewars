// Is the date today

// Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

// Make sure that your function does not return a false positive by just checking just the day.

function isToday(date) {
    //Code goes here.
    return date.toDateString() == new Date().toDateString()
  }



//   Enumerable Magic #4 - True for None?

//   Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

function none(arr, fun){
    // ...
    return !arr.some(fun)
  }





//   Semi-Optional  

//   We have implemented a function wrap(value) that takes a value of arbitrary type and wraps it in a new Javascript Object setting the 'value' key on the new Object to the passed-in value.

function wrap(value) {
    return {"value":value};
  }