// WeIrD StRiNg CaSe

// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

function toWeirdCase(string){
    //TODO
    let arr = string.split(' ')
    let finArr =[]
    for (let i = 0 ; i < arr.length ; i++) {
      let str = ''
      for (let j = 0 ; j < arr[i].length ; j++) {
        if (j%2==0) {
          str += arr[i][j].toUpperCase()
        }
        else {
          str += arr[i][j].toLowerCase()
        }
      }
      finArr.push(str)
    }
    return finArr.join(' ')
  }




//   Training JS #11: loop statement --break,continue

//   Coding in function ```grabDoll```. function accept 1 parameter:```dolls```. it's a string array, a list of some dolls.

// You need traverse ```dolls``` by using ```for``` loop. If element is  "Hello Kitty" or "Barbie doll", you should push it to a ```bag```(bag is an array, I've defined in the function); if it's other strings, we should use ```continue``` skip it. 

// When the ```bag``` has three element, ```bag``` is full. You should use ```break``` jump out the loop; If ```bag``` is not full, you should traverse ```dolls``` until the last element. 

// Return the ```bag``` after for loop finished.

// You should use ```for```, ```break``` and ```continue``` in your code. otherwise, your solution may not pass this kata.

function grabDoll(dolls){
    var bag=[];
    //coding here
    for (let i = 0 ; i < dolls.length ; i++) {
      if (dolls[i]== "Hello Kitty" || dolls[i]== "Barbie doll") {
        bag.push(dolls[i])
      } else continue
      if(bag.length==3) break
    }
    return bag;
  }






// Localize The Barycenter of a Triangle

// The medians of a triangle are the segments that unit the vertices with the midpoint of their opposite sides. The three medians of a triangle intersect at the same point, called the barycenter or the centroid. Given a triangle, defined by the cartesian coordinates of its vertices we need to localize its barycenter or centroid.

// The function bar_triang() or barTriang or bar-triang, receives the coordinates of the three vertices A, B and C as three different arguments and outputs the coordinates of the barycenter O in an array [xO, yO]

// This is how our asked function should work: the result of the coordinates should be expressed up to four decimals, (rounded result).

// You know that the coordinates of the barycenter are given by the following formulas.

function barTriang(p1, p2, p3){
    //your code here
    let triangle = {
      x: Number(((p1[0] + p2[0] +p3[0])/3).toFixed(4)),
      y: Number(((p1[1] + p2[1] +p3[1])/3).toFixed(4))
    }
    return [triangle.x,triangle.y]
  }