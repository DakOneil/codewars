// Grasshopper - Object syntax debug

// Object debugging
// While making a zork-type game, you create an object of rooms. Unfortunately, the game is not working. Find all of the errors in the rooms object to get your game working again.

var rooms = {
    first: {
      description: 'This is the first room',
      items: {
        chair: 'The old chair looks comfortable',
        lamp: 'This lamp looks ancient'
      }
    },
    second: {
      description: 'This is the second room',
      items: {
        couch: 'This couch looks like it would hurt your back',
        table: 'On the table there is an unopened bottle of water'
      }
    }
  }





//   Training JS #21: Methods of String object--trim() and the string template

//   Task
// Coding in function fiveLine, function accept 1 parameter:s. s is a string.

// Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;

// Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.

// Note2: Using a string template can make your job easier.

  function fiveLine(s){
    //coding here...
    s = s.trim()
    return `${s}\n${s}${s}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`
  }




//   Geometry Basics: Circle Area in 2D

// This series of katas will introduce you to basics of doing geometry with computers.

// Write the function circleArea/CircleArea which takes in a Circle object and calculates the area of that circle.

function circleArea(circle){
    // your code here
    return Math.PI * circle.radius**2
  }




//   Fun with ES6 Classes #1 - People, people, people

//   Time for some OOP fun!

// Define a class Person with the following properties:

// A constructor that accepts 4 arguments: firstName/FirstName (defaults to "John" if not set), lastName/LastName (defaults to "Doe" if not set), age/Age (defaults to 0 if not set) and gender/Gender (defaults to "Male" if not set). These should be stored in this.firstName/this.FirstName, this.lastName/this.LastName, this.age/this.Age and this.gender/this.Gender respectively.
// A method sayFullName/SayFullName that accepts no arguments and returns the full name (e.g. "John Doe")
// A class/static method greetExtraTerrestrials/GreetExtraTerrestrials that accepts one parameter raceName and returns "Welcome to Planet Earth raceName". For example, if the race name is "Martians", it should say "Welcome to Planet Earth Martians"
// You may use any valid syntax you like; however, it is highly recommended that you complete this Kata using ES6 syntax and features.

// Have fun! :D

  class Person {
    // Get coding in ES6 :D
    constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
      this.firstName = firstName, 
      this.lastName = lastName, 
      this.age = age, 
      this.gender = gender
    }
    sayFullName() {
      return `${this.firstName} ${this.lastName}`
    }
    static greetExtraTerrestrials(raceName) {
      return `Welcome to Planet Earth ${raceName}`
    }
  }

  