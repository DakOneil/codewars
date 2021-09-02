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