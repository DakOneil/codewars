// Decode the Morse code

// In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
// The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

// NOTE: Extra spaces before or after the code have no meaning and should be ignored.

// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.
// All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.

// Good luck!

decodeMorse = function(morseCode){
    //your code here
    let words = morseCode.split('   ')
    let letters = words.join(' ').split(' ')
    let morseAlph = {
      '.-': 'a',
      '-...': 'b',
      '-.-.': 'c',
      '-..': 'd',
      '.': 'e', 
      '..-.': 'f',
      '--.': 'g',
      '....': 'h',
      '..': 'i',
      '.---': 'j',
      '-.-': 'k',
       '.-..': 'l',
      '--': 'm',
      '-.': 'n',
      '---': 'o',
      '.--.': 'p',
      '--.-': 'q',
      '.-.': 'r',
      '...': 's',
      '-': 't',
      '..-' : 'u',
      '...-': 'v',
      '.--': 'w',
      '-..-': 'x',
      '-.--': 'y',
      '--..': 'z',
      '.-.-.-': '.',
      '-.-.--': '!',
      '...---...': 'SOS'
    }
    for (let i = 0 ; i < words.length ; i++) {
      let oneWord = words[i].split(' ')
      for (let j = 0 ; j < oneWord.length ; j++) {
        oneWord[j] = morseAlph[oneWord[j]]
      }
      words[i] = oneWord.join('').toUpperCase()
    }
    return words.join(' ').trim()
  }





//   Is a number prime?

//   Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 (or similar, depends on language version). Looping all the way up to n, or n/2, will be too slow.

function isPrime(num) {
    //TODO
    const limit = Math.sqrt(num)
    if (num < 2 ) return false
    for (let i = 2 ; i <= limit ; i++) {
      if (num % i == 0) return false
    }
    return true
  }




  