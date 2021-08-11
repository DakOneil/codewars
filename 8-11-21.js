// Flatten

// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

var flatten = function (array){
    // TODO: Program me
    let secArray = []
    for (let i = 0 ; i < array.length ; i++) {
      if (Array.isArray(array[i])) {
        secArray.push(...array[i])
      } else {
        secArray.push(array[i]) 
      }
    }
    return secArray
  }