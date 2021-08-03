// The Office IV - Find a Meeting Room

// Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

// In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

// 'X' --> busy
// 'O' --> empty
// If all rooms are busy, return "None available!"

function meeting(x){
    return x.every(room=>room==='X') ? 'None available!' : x.findIndex(room=>room==='O')
  }





//   The Office I - Outed

// Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

// In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

// Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

// Happiness rating will be total score / number of people in the room.

// Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).

function outed(meet, boss){
    const arr = Object.values(meet)
    let sum = arr.reduce((acc,c)=>acc+c,0) + meet[boss]
    return sum / arr.length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!' 
  } 






//   The Office II - Boredom Score

// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

function boredom(staff){
    let scores = {
      'accounts': 1,
      'finance': 2,
      'canteen': 10,
      'regulation': 3,
      'trading': 6,
      'change': 6,
      'IS': 8,
      'retail' :5,
      'cleaning': 4,
      'pissing about': 25
    }
    const arr = Object.values(staff)
    let sum = arr.map(el=>scores[el]).reduce((acc,c)=>acc+c,0)
    return sum >= 100 ? 'party time!!' : sum > 80 ? 'i can handle this' : 'kill me now'
  }






// The Office III - Broken Photocopier

// The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

// Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

// Given a string of binary, return the version the photocopier gives you as a string.

function broken(x){
    return x.split('').map(el=> {
      if (el==='1') return '0'
      else if (el==='0') return '1'
    }).join('')
  }






// The Office V - Find a Chair

// So you've found a meeting room - phew! You arrive there ready to present, and find that someone has taken one or more of the chairs!! You need to find some quick.... check all the other meeting rooms to see if all of the chairs are in use.

// Your meeting room can take up to 8 chairs. need will tell you how many have been taken. You need to find that many.

// Find the spare chairs from the array of meeting rooms. Each meeting room tuple will have the number of occupants as a string. Each occupant is represented by 'X'. The room tuple will also have an integer telling you how many chairs there are in the room.

// You should return an array of integers that shows how many chairs you take from each room in order, up until you have the required amount.

// example:

// [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]] when you need 4 chairs:

// result -> [0, 1, 3] no chairs free in room 0, take 1 from room 1, take 3 from room 2. no need to consider room 3 as you have your 4 chairs already.

// If you need no chairs, return "Game On". If there aren't enough spare chairs available, return "Not enough!".

function meeting(x, need){
    if (need === 0) return "Game On"
    let takenArr = x.map(el=> {
      if (el[1] - el[0].length > 0) return el[1] - el[0].length 
      else return 0
    })
    for (let i = 0 ; i < takenArr.length ; i++) {
      let partial = takenArr.slice(0,i).reduce((acc,c)=>acc+c,0)
      if (partial >= need) {
        takenArr = takenArr.slice(0,i) ;
        break ;
      }
    }
    while (takenArr.reduce((acc,c)=>acc+c,0) > need) {
      takenArr[takenArr.length-1]--
    }
    return takenArr.reduce((acc,c)=>acc+c,0) < need ? 'Not enough!' : takenArr
  }