// esreveR

// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

reverse = function(array) {
    // TODO: program me!
    let finArray = []
    for (let i = 0 ; i < array.length ; i++) {
      finArray.unshift(array[i])
    }
    return finArray
  }

