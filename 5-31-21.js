// Make them bark!

// #Make them bark

// You have been hired by a dogbreeder to write a program to keep record of his dogs.

// You've already made a constructor Dog, so no one has to hardcode every puppy.

// The work seems to be done. It's high time to collect the payment.

// ..hold on! The dogbreeder says he wont pay you, until he can make every dog object .bark(). Even the ones already done with your constructor. "Every dog barks" he says. He also refuses to rewrite them, lazy as he is.

// You can't even count how much objects that bastard client of yours already made. He has a lot of dogs, and none of them can .bark().

// Can you solve this problem, or will you let this client outsmart you for good?

// Practical info:
// The .bark() method of a dog should return the string 'Woof!'.

// The contructor you made (it is preloaded) looks like this:

// function Dog(name, breed, sex, age){
//     this.name  = name;
//     this.breed = breed;
//     this.sex   = sex;
//     this.age   = age;
// }
// Hint: A friend of yours just told you about how javascript handles classes diferently from other programming languages. He couldn't stop ranting about "prototypes", or something like that. Maybe that could help you..."

// TODO: solve the barking problem!
function Dog(name, breed, sex, age){
    this.name  = name;
    this.breed = breed;
    this.sex   = sex;
    this.age   = age;
    this.bark = function() {
      return "Woof!"
    }
}

// FIXME: Get Full Name

// The code provided is supposed return a person's Full Name given their first and last names.

// But it's not working properly.

// Notes
// The first and/or last names are never null, but may be empty.

// Task
// Fix the bug so we can all go home early.

class Dinglemouse{

    constructor( firstName, lastName ){
      this.firstName = firstName;
      this.lastName = lastName;
      this.getFullName = function(){
      return `${firstName} ${lastName}`
    }
    }
  }




  