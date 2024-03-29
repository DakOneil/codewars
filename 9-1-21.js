//What's a Perfect Power anyway?

// A perfect power is a classification of positive integers:

// In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer. More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that mk = n.

// Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair m and k with mk = n as a proof. Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

// Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions. However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.

// Examples
// Test.describe("perfect powers", function(){
//   Test.it("should work for some examples",function(){
//     Test.assertSimilar(isPP(4), [2,2], "4 = 2^2");
//     Test.assertSimilar(isPP(9), [3,2], "9 = 3^2");
//     Test.assertEquals( isPP(5), null, "5 isn't a perfect number");
//   });
// });

var isPP = function(n){
    let mRange = []
    let m = 2
    while (m**2 <= n) {
      mRange.push(m)
      m++
    }
   mRange = mRange.reverse()
   for (let i = 0 ; i < mRange.length ; i++ ) {
     let k = 2
     while (mRange[i]**k <= n) {
       if (mRange[i]**k === n) {
         return [mRange[i],k]
       }
       k++
     }
   }
   
   return null
 }





 //Common Denominators

//  Common denominators

// You will have a list of rationals in the form

// { {numer_1, denom_1} , ... {numer_n, denom_n} } 
// or
// [ [numer_1, denom_1] , ... [numer_n, denom_n] ] 
// or
// [ (numer_1, denom_1) , ... (numer_n, denom_n) ] 
// where all numbers are positive ints. You have to produce a result in the form:

// (N_1, D) ... (N_n, D) 
// or
// [ [N_1, D] ... [N_n, D] ] 
// or
// [ (N_1', D) , ... (N_n, D) ] 
// or
// {{N_1, D} ... {N_n, D}} 
// or
// "(N_1, D) ... (N_n, D)"
// depending on the language (See Example tests) in which D is as small as possible and

// N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
// Example:
// convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
// Note:
// Due to the fact that the first translations were written long ago - more than 6 years - these first translations have only irreducible fractions.

// Newer translations have some reducible fractions. To be on the safe side it is better to do a bit more work by simplifying fractions even if they don't have to be.

function convertFrac(lst){
    //Your code here
    let denoms = []
    lst.forEach(el=>{
      denoms.push(el[1])
    })
    let sort = denoms.sort((a,b)=>b-a)
    let big = sort[0]
    let lcd = 0 
    let i = 1
    while (lcd === 0) {
      let check = denoms.map(el=> (big * i)%el === 0)
      if (check.every(x=>x===true)) {
        lcd = i*big
      }
      i++
    }  
    let numers = []
    lst.forEach(el=> {
      numers.push(Math.round((el[0] / el[1]) * lcd))
    })
    let newList = ''
    numers.forEach(el => {
      newList += `(${el},${lcd})`
    })
    return newList
  }





 //Broken sequence

//  You receive some random elements as a space-delimited string. Check if the elements are part of an ascending sequence of integers starting with 1, with an increment of 1 (e.g. 1, 2, 3, 4).

// Return:

// 0 if the elements can form such a sequence, and no number is missing ("not broken", e.g. "1 2 4 3")
// 1 if there are any non-numeric elements in the input ("invalid", e.g. "1 2 a")
// n if the elements are part of such a sequence, but some numbers are missing, and n is the lowest of them ("broken", e.g. "1 2 4" or "1 5")
// Examples
// "1 2 3 4"  ==>  return 0, because the sequence is complete

// "1 2 4 3"  ==>  return 0, because the sequence is complete (order doesn't matter)

// "2 1 3 a"  ==>  return 1, because it contains a non numerical character

// "1 3 2 5"  ==>  return 4, because 4 is missing from the sequence

// "1 5"      ==>  return 2, because the sequence is missing 2, 3, 4 and 2 is the lowest

function findMissingNumber(sequence){
    //your code here
    let ascendingArr = sequence.split(' ').sort((a,b)=>+a - +b)
  
    if (sequence.length === 0) { return 0 }
    else if (!/^[0-9\s]*$/.test(sequence)) { return 1 }
    else if (ascendingArr.length == ascendingArr.reverse()[0]) { return 0 }
    else {
      ascendingArr.reverse()
      for (let i = 0 ; i <= ascendingArr.length ; i++) {
        if (+ascendingArr[i] !== i+1) {
          return i+1
        }
      }
    } 
    return 0 
  }