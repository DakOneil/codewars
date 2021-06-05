// Alphabet symmetry

// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

// Good luck!

function solve(arr){  
    //code
      let alph = 'abcdefghijklmnopqrstuvwxyz'
      return arr.map(word=> {
        let c = 0
        for (let j = 0 ; j < word.length ; j++) {
          if (word[j].toLowerCase() == alph[j]) c++
        }
        return c
      })
    };
    
    //PREP
    //Params : an array of words
    //Returns : an array of counts of letters in each word in alph position
    //Ex :
    //Pseudo: create alph to measure against
    //      for loop of array
    //      for loop of each word 
    //      make sure matching upper/lower case
    //      check that index of letter in word matches index of letter in alph
    //      have a count variable that increases with each matching index
