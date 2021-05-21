// Max Headroom and JavaScript style

// Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value? Can you spot a problem and fix it? Can you learn something about JavaScript style in this kata?

function getMax1()
{
  var max = 
  {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2()
{
  var max2 =
  {
    name: 'Max Headroom'
  }
  return max2
}




// Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()

// Task
// Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char.

// Please return the gap between the first position of c and the last position of c.

// If there are a lot of c in the str, should return a positive integer; If there is only one c in str, should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.

// for example:

// firstToLast("ababc","a") should return 2(2-0)
// firstToLast("ababc","c") should return 0(4-4)
// firstToLast("ababc","d") should return -1

function firstToLast(str,c){
    //coding here..
    let first = str.indexOf(c)
    let second = str.lastIndexOf(c)
    
    if (first >= 0 && second >= 0) {
      return second - first
    } else if (!second) {
      return 0
    } else if (!str.includes(c)) {
      return -1
    }
  }




  