// Training JS #16: Methods of String object--slice(), substring() and substr()

// Task
// Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

// The first mission: Traversing arr, find the shortest string length.

// The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

// for example:

// cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
// cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
// cutIt(["codewars","javascript","java"]) should return ["code","java","java"]

function cutIt(arr){
    //coding here...
    let short = arr[0].length
    for (let i = 1 ; i < arr.length ; i++) {
      if (arr[i].length < short) short = arr[i].length
    }
    return arr.map(el=> {
      return el.slice(0,short)
    })
  }






//   Calculate Price Excluding VAT

// Write a function that calculates the original product price, without VAT.

// Example
// If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

// Thus, if your function receives 230.00 as input, it should return 200.00

// Notes:

// VAT is always 15% for the purposes of this Kata.
// Round the result to 2 decimal places.
// If null value given then return -1

//return price without vat
function excludingVatPrice(price){
    // your code
  //   return Math.round((price/1.15)*100)/100 ? Math.round((price/1.15)*100)/100 : -1;
    return price==null ? -1 : Number((price/1.15).toFixed(2))
  }

  