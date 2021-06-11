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




//   Training JS #21: Methods of String object--trim() and the string template

//   Task
// Coding in function fiveLine, function accept 1 parameter:s. s is a string.

// Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;

// Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.

// Note2: Using a string template can make your job easier.

// Example:

// fiveLine("  a") should return "a\naa\naaa\naaaa\naaaaa"
// a
// aa
// aaa
// aaaa
// aaaaa       <---The effect when you console.log it
// fiveLine("  xy ") 
// should return "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
// xy
// xyxy
// xyxyxy
// xyxyxyxy
// xyxyxyxyxy  <---The effect when you console.log it

function fiveLine(s){
    //coding here...
    s = s.trim()
    return `${s}\n${s}${s}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`
  }




//   Directions Reduction

//   Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

// The Haskell version takes a list of directions with data Direction = North | East | West | South.
// The Clojure version returns nil when the path is reduced to nothing.
// The Rust version takes a slice of enum Direction {North, East, West, South}.
// See more examples in "Sample Tests:"
// Notes
// Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
// if you want to translate, please ask before translating.

function dirReduc(arr){
  // ...
  for (let i = 0 ; i < arr.length ; i++) {
    if ((arr[i]=='NORTH' && arr[i+1]=='SOUTH') ||
        (arr[i]=='SOUTH' && arr[i+1]=='NORTH') ||
        (arr[i]=='WEST' && arr[i+1]=='EAST') ||
        (arr[i]=='EAST' && arr[i+1]=='WEST')) {
      arr.splice(i,2);
      i=-1;
    }
  }
  return arr
}