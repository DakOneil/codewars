// Rectangle into Squares

// The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).

// alternative text

// Can you translate this drawing into an algorithm?

// You will be given two dimensions

// a positive integer length
// a positive integer width
// You will return a collection or a string (depending on the language; Shell bash, PowerShell, Pascal and Fortran return a string) with the size of each of the squares.

// Examples in general form:
// (depending on the language)

//   sqInRect(5, 3) should return [3, 2, 1, 1]
//   sqInRect(3, 5) should return [3, 2, 1, 1]
  
//   You can see examples for your language in **"SAMPLE TESTS".**
// Notes:
// lng == wdth as a starting case would be an entirely different problem and the drawing is planned to be interpreted with lng != wdth. (See kata, Square into Squares. Protect trees! http://www.codewars.com/kata/54eb33e5bc1a25440d000891 for this problem).

// When the initial parameters are so that lng == wdth, the solution [lng] would be the most obvious but not in the spirit of this kata so, in that case, return None/nil/null/Nothing or return {} with C++, Array() with Scala, [] with Raku.

// In that case the returned structure of C will have its sz component equal to 0.

// Return the string "nil" with Bash, PowerShell, Pascal and Fortran.



function sqInRect(lng, wdth){
    //your code here

    /* 
    declare return array
    declare vars for the small and big sides of the rec
    if sides are == then return null

    subtract square area of smallside from total rec area
    loop and continue to subtract small side area from rec until small side == 1
    when smallside == 1 then push 1 to return array and subtract 1 from rec area until rec area is 0
    once rec area is 0 then return the return array
    */
    //declare final array
    let final = [] ;
    //declare big and small side vars
    let bigSide, smallSide ;
    //if sides are equal return null
    if (lng==wdth) {
        return null
    }   
    
    //declare total recArea var and assign its val
    let recArea = bigSide * smallSide
    //start a loop that will run until rec area == 0
    while (recArea > 0) {
          //assign the small and big sides to their vars
        if (lng>wdth) {
            //push the small side length to final array
            final.push(wdth)
            //square the small side and subtract it from total rec area
            recArea -= wdth**2
            // subtract the square's side length from the long side
            lng -= wdth
        } else {
            //push the small side length to final array
            final.push(lng)
            //square the small side and subtract it from total rec area
            recArea -= lng**2
            // subtract the square's side length from the long side
            wdth -= lng
        }
    }
    //return final arr
    return final
}





function nextItem(xs, item) {
    // TODO: Implement me
    /*
    get an array of strings or numbers, or a string ; and a value
    find the value and return the next value
    if their is no value present or no next value return undefined
    */
   // make sure that it isn't undefined
        // ternary to return undefined if no value present or its the last value or ...the following
    // find the value and assign its index to a variable
    // add one to the index var
    // return the value at the index
    let ind = xs.indexOf(item)
    return ind < 0 || ind == xs.length - 1 ? undefined : xs[ind+1]
}



Where my anagrams at?
function anagrams(word, words) {
    /* create a function that takes in a word and counts out all of its letters
    run that function on the word argument and then filter out words based on running
    it on each element and making sure that it equals word*/
    //function takes in a param
    //function makes an object with a letter count 
    //words.forEach(el=>function(el)==object)
    function letterCount(a) {
      let aObj = {}
      let aLetters = a.split('')
      aLetters.forEach(el=>{
        if (!aObj.includes(el)) {
          aObj[el] = 1
        } else {
          aObj[el]++
        }
      })
      return aObj
    }
    return words.filter(el=>{
      letterCount(el) == letterCount(word)
    })
  }