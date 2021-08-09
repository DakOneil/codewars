// Did she say hallo?

// You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

// Write a simple regex to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish
// By the way, how cool is the czech republic hallo!!

// PS. you can assume the input is a string. PPS. to keep this a beginner exercise you don't need to check if the greeting is a subset of word ('Hallowen' can pass the test)

// PS. regex should be case insensitive to pass the tests

function validateHello(greetings) {
    let hello = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc']
    greetings = greetings.toLowerCase()
    return hello.map(el=>greetings.includes(el)).some(x=>x)
  }





// Sort the Vowels!

// Sort the Vowels!
// In this kata, we want to sort the vowels in a special format.

// Task
// Write a function which takes a input string s and return a string in the following way:

   
//                   C|                          R|
//                   |O                          n|
//                   D|                          d|
//    "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
//                   W|                          T|
//                   |A                          |e
//                   R|                          5|
//                   S|                          T|

// Notes:

// List all the Vowels on the right side of |
// List every character except Vowels on the left side of |
// Return every character in its original case
// Each line is seperated with \n
// Invalid input ( undefined / null / integer ) should return an empty string

function sortVowels(s){
    //code
    let vowels = 'aeiou'
    if (typeof s === "string") {
        return s.split('').map(el=> {
          if (vowels.includes(el.toLowerCase())) {
            return '|' + el
          } else {
            return el + '|'
          }
        }).join('\n')
    } else {
      return ''
    }
  }





