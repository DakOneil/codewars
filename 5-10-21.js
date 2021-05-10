// Training JS #18: Methods of String object--concat() split() and its good friend join()

// Task
// Implement a function which accepts 2 arguments: string and separator.

// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

// For example:

// splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
// splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
// splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
// splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"

function splitAndMerge(string, separator) {
    let arr = string.split(' ')
    for (let i = 0 ; i < arr.length ; i++) {
      arr[i] = arr[i].split('').join(separator)
    }
    return arr.join(' ')
  }




//   Enumerable Magic #2 - True for Any?

//   Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.

function any(arr, fun){
    // ...
    let newArr = arr.map(x=>fun(x))
    if (newArr.includes(true)) return true 
    else return false
  }

function any(arr, fun){
// ...
    let newArr = arr.map(x=>fun(x))
    return newArr.includes(true) ? true : false
}