// Find min and max

// Implement a function that returns the minimal and the maximal value of a list (in this order).

function getMinMax(arr){
    //..
    return [Math.min(...arr), Math.max(...arr)]
  };







//   Average Scores

// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

function average(scores) {
    // code to calculate the average
  return Math.round(scores.reduce((acc,c)=>acc+c,0) / scores.length)
}