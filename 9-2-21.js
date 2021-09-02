// Recursion #2 - Fibonacci

// Do you know recursion?
// This is a kata series that you can only solve using recursion.
// ##2 - Fibonacci number

// In mathematical terms, the sequence f(n) of fibonacci numbers is defined by the recurrence relation

// f(n) = f(n-1) + f(n-2)

// with seed values

// f(1) = 1 and f(2) = 1

// #Your task

// You have to create the function fibonacci that receives n and returns f(n). You have to use recursion.

const fibonacci = n => { 
    if (n==0 || n==1) return n
    else return fibonacci(n-1) + fibonacci(n-2)
  };





  //Recursive Ninja

//   Ninjas frequently need to signal each other in code, often employing natural sounds as a cover. We’re going to give our ninja the ability to chirp like a cricket, with the number of chirps encoding different messages.

// Implement a "recursive function" that takes one parameter (n) and outputs a string i.e.

//   chirp(4);
//   //output would be chirp-chirp-chirp-chirp.

function chirp(n) {
    if (n==0) return 'chirp'
    else if(n==1) return 'chirp'
    else return chirp(n-1) + '-' + chirp(0)
  }





//Fibonacci Reloaded

// And here is Fibonacci again. This time we want to go one step further. Our fib() function must be faster! Can you do it?

// In case you don't know, what the Fibonacci number is:

// The nth Fibonacci number is defined by the sum of the two previous Fibonacci numbers. In our case: fib(1) := 0 and fib(2) := 1. With these initial values you should be able to calculate each following Fibonacci number.

// Examples:

// fib(1) // === 0
// fib(2) // === 1
// fib(3) // === 1
// fib(4) // === 2
// fib(5) // === 3

function fib(num) {
    var a = 0, b = 1, temp;
    
      while (num >= 1){
        temp = a;
        a = a + b;
        b = temp;
        num--;
      }
    
      return b;
    }




//Heads and Legs

// #Description

// Everybody has probably heard of the animal heads and legs problem from the earlier years at school. It goes:

// “A farm contains chickens and cows. There are x heads and y legs. How many chickens and cows are there?”

// Where x <= 1000 and y <=1000

// #Task

// Assuming there are no other types of animals, work out how many of each animal are there.

// Return a tuple in Python - (chickens, cows) and an array list - [chickens, cows]/{chickens, cows} in all other languages

// If either the heads & legs is negative, the result of your calculation is negative or the calculation is a float return "No solutions" (no valid cases).

// In the form:

// [Heads, Legs] = [72, 200]

// VALID - [72, 200] =>             [44 , 28]   
//                              [Chickens, Cows]

// INVALID - [72, 201] => "No solutions"
// However, if 0 heads and 0 legs are given always return [0, 0] since zero heads must give zero animals.

// There are many different ways to solve this, but they all give the same answer.

// You will only be given integers types - however negative values (edge cases) will be given.

// Happy coding!

function animals(heads, legs){
    //return [Chickens, Cows]
    let chickens = heads
    let cows = 0
    for (let i = chickens ; i >= 0 ; i--) {
      let guessLegs = i*2 + cows*4
      if (guessLegs === legs) return [i,cows]
      cows++
    }
    return 'No solutions'
  }