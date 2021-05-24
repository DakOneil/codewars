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