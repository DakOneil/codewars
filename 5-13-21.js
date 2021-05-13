// Simple Change Machine

// Your task is to create a change machine.

// The machine accepts a range of specified coins and notes, it returns change in 20p and 10p coins in the minimum amount of pieces. A 50p for example would return two 20p pieces and one 10p piece. The machine will always try and return change, if you input a 20p for example it will return "10p 10p".

// The machine accepts these coins and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are not accepted by the machine will be returned. If you were to put a £20 note into the machine for example, it would be returned to you and not broken into change.

// This change machine is programmed to accept and distribute strings rather than numbers. The change will be returned as one string with the change separated by single spaces & no commas. The values of the string will be descending.

function changeMe(moneyIn){
    // Write your function here
    let accepted = ['£5','£2','£1','50p','20p']
    if (!accepted.includes(moneyIn)) {return moneyIn}
    else if (moneyIn == '20p') {return "10p 10p"}
    else {
      let objMon = {
        '£5': 500,
        '£2': 200,
        '£1': 100,
        '50p': 50,
        '20p': 20
      }
      let enterMon = objMon[moneyIn]
      let returnMon = 0
      let count20p = 0
      while (returnMon < enterMon) {
        returnMon += 20
        count20p++
      }
      if (objMon[moneyIn] == returnMon) {
        return "20p ".repeat(count20p).trim()
      } else {
        return "20p ".repeat(count20p-1) + "10p"
      }
    }
  }





//   Arguments to Binary addition

//   Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

// If your language can handle float binaries assume the array won't contain float or doubles.

function arr2bin(arr){
  // show me the code
  let filt = arr.filter(x => typeof x == 'number')
  return filt.reduce((acc,c)=>acc+c,0).toString(2)
}

