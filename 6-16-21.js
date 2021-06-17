// Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

// Your task is to return one of the following strings:

// < firstName here >, < country here > of the first Python developer who has signed up; or
// There will be no Python developers if no Python developer has signed up.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//   { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
// ];
// your function should return Victoria, Puerto Rico.

// Notes:

// The input array will always be valid and formatted as in the example above.

function getFirstPython(list) {
    // Thank you for checking out my kata :)
    function findPy(obj) {
      return obj.language == 'Python'
    }
    let ind = list.findIndex(findPy)
    if (ind>-1) {
      return `${list[ind].firstName}, ${list[ind].country}`  
    } else {
      return "There will be no Python developers"
    }
  }





//   Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages

//   You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object (associative array in PHP) which includes the count of each coding language represented at the meetup.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//   { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// ];
// your function should return the following object (associative array in PHP):

// { C: 2, JavaScript: 1, Ruby: 1 }
// Notes:

// The order of the languages in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.

function countLanguages(list) {
    // thank you for checking out the Coding Meetup kata :)
    let langs = {}
    for (let i = 0 ; i < list.length ; i++) {
      let a = list[i].language
      if (!langs[a]){
        langs[a] = 1
      } else {
        langs[a]++
      } 
    }
    return langs
  }





//   Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?

//   You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return either:

// true if all developers in the list code in the same language; or
// false otherwise.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
// ];
// your function should return true.

// Notes:

// The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted will upper-case 'J' and 'S'
// The input array will always be valid and formatted as in the example above.

function isSameLanguage(list) {
    // thank you for checking out the Coding Meetup kata :)
    return list.every(a=> {
      return a.language==list[0].language
    })
  }






//   Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer

//   You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
//   { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ];
// your function should return the following array:

// [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]
// Notes:

// The input array will always be valid and formatted as in the example above.

function findSenior(list) {
    // thank you for checking out the Coding Meetup kata :)
    let oldest = 0
    for (let i = 0 ; i < list.length ; i++) {
      if(list[i].age > oldest) oldest = list[i].age
    }
    return list.filter(old=>old.age>= oldest)
  }




//   Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?

//   You will be given a sequence of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
// false otherwise.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
//   { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
//   { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
// ];
// your function should return true as there is at least one developer from the required 5 geographic zones.

// Notes:

// The input array and continent names will always be valid and formatted as in the list above for example 'Africa' will always start with upper-case 'A'.

function allContinents(list) {
    // thank you for checking out the Coding Meetup kata :) 
    let countries = []
    list.forEach(c=> {
      countries.push(c.continent)
    })
    return countries.includes('Africa' && 'Americas' && 'Asia' && 'Europe' && 'Oceania')
  }






//   Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?

//   You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
// false otherwise.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
//   { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
//   { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
//   { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
//   { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
// ];
// your function should return true as there is at least one developer from each age group.

// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer up to 199.

function isAgeDiverse(list) {
  // thank you for checking out the Coding Meetup kata :)
  let teens = num => num>12&&num<20
  let twens = num => num>19&&num<30
  let thirs = num => num>29&&num<40
  let fors = num => num>39&&num<50
  let fifs = num => num>49&&num<60
  let sixs = num => num>59&&num<70
  let sevs = num => num>69&&num<80
  let eights = num => num>79&&num<90
  let nins = num => num>89&&num<100
  let cents = num => num>99&&num<200
  let ages = []
  list.forEach(person=> {
    ages.push(person.age)
  })
  
  if (ages.length < 10) return false
  else if (!ages.some(teens) || !ages.some(twens) || !ages.some(thirs) || !ages.some(fors) || !ages.some(fifs) || !ages.some(sixs) || !ages.some(sevs) || !ages.some(eights) || !ages.some(nins) || !ages.some(cents)) return false
  else return true
}





// Coding Meetup #11 - Higher-Order Functions Series - Find the average age

// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//   { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
// ];
// write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer.

function getAverageAge(list) {
  // thank you for checking out the Coding Meetup kata :)
  let ages = []
  list.forEach(person=>{
    ages.push(person.age)
  })
  return Math.round(ages.reduce((acc,c)=>acc+c,0) / ages.length)
}




// Coding Meetup #10 - Higher-Order Functions Series - Create usernames

// Given the following input array:

// var list1 = [
//   { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
//   { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
// ];
// write a function that adds the username property to each object in the input array:

// [
//   { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
//     username: 'emilyn1990' },
//   { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
//     username: 'nore2000' }
// ]
// The value of the username property is composed by concatenating:

// firstName in lower-case;
// first letter of the lastName in lower-case; and
// the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.
// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer.
// Lastname will always be one upper-cased letter followed by dot, e.g. 'N.'
// Order of the objects in the array should be maintained but order of the properties in the individual objects does not matter.

function addUsername(list) {
  // thank you for checking out the Coding Meetup kata :)
  const currYear = new Date().getFullYear()
  list.forEach(person=>{
    person.username = `${person.firstName.toLowerCase()}${person.lastName[0].toLowerCase()}${currYear-person.age}`
  })
  return list
}
