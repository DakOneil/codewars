// Polish alphabet

// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

function correctPolishLetters (string) {
    // your code
    let arr = string.split('')
    let polishObj = {
      'ą': 'a',
      'ć': 'c',
      'ę': 'e',
      'ł': 'l',
      'ń': 'n',
      'ó': 'o',
      'ś': 's',
      'ź': 'z',
      'ż': 'z'
    }
    for (let i = 0 ; i < arr.length ; i++) {
      if (arr[i] in polishObj) arr.splice(i,1,polishObj[arr[i]])
    }
    return arr.join('')
  }




//   All unique

//   Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

function hasUniqueChars(str){
    // ...
    for (let i = 0 ; i < str.length ; i++) {
      if (str.includes(str[i], i+1)) {return false}
    }
    return true
  }