// WeIrD StRiNg CaSe

// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

function toWeirdCase(string){
    //TODO
    let arr = string.split(' ')
    let finArr =[]
    for (let i = 0 ; i < arr.length ; i++) {
      let str = ''
      for (let j = 0 ; j < arr[i].length ; j++) {
        if (j%2==0) {
          str += arr[i][j].toUpperCase()
        }
        else {
          str += arr[i][j].toLowerCase()
        }
      }
      finArr.push(str)
    }
    return finArr.join(' ')
  }