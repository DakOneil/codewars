// Hello Happy Codevarrior!

// VVhat ?!?

// None of zese codevarriors seemz to remember hiz ovvn name !

// Kould you help ?

// var albert = new Warrior("Al")
// var boris  = new Warrior("Boris")

// albert.toString() --> "Hi! my name's Boris" <-- ohoh..

function Warrior(n){
    let name = n;  
    this.name = function(n){
      if( n ) name=n;
      return name;
    }
  }
    
  Warrior.prototype.toString = function(){
      return "Hi! my name's "+this.name();
  }

  



//   easy logs

//   Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.

function logs(x , a, b){
//your code here
  return Math.log(a)/Math.log(x) + Math.log(b)/Math.log(x) 
}





// Generate user links

// Your task is to create userlinks for the url, you will be given a username and must return a valid link.

// Example
// generate_link('matt c')
// http://www.codewars.com/users/matt%20c

function generateLink(user) {
    const homeLink = 'http://www.codewars.com/users/'
    let userLink = encodeURIComponent(user)
    return `${homeLink}${userLink}`
  }




//   Small enough? - Beginner

//   You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit){
  if (a.map(x=> {
    return x<=limit
  }).includes(false)) return false
  else return true
}

// P: a and limit
// R: return a boolean
// E: 
// P: loop through a, check if each value is <= limit, return boolean



// Factorial

// Your task is to write function factorial.

function factorial(n){
  //your code here
  let fac = 1
  for (let i = 1 ; i <= n ; i++) {
    fac *= i
  }
  return fac == 0 ? 1 : fac
}




// Alphabet war

// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

function alphabetWar(fight)
{
  const leftObj = {
    'w': 4, 
    'p': 3, 
    'b': 2, 
    's': 1
  }
  const rightObj = {
    'm': 4, 
    'q': 3, 
    'd': 2, 
    'z': 1
  }
  let left = 0
  let right = 0
  for (let i = 0 ; i < fight.length ; i++) {
    if (Object.keys(leftObj).includes(fight[i])) left += leftObj[fight[i]]
    else if (Object.keys(rightObj).includes(fight[i])) right += rightObj[fight[i]]
  }
   return left > right ? 'Left side wins!' : right > left ? 'Right side wins!' : "Let's fight again!";
}