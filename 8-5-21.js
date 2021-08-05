// Digital cypher

// Introduction
// Digital Cypher assigns to each letter of the alphabet unique number. For example:

//  a  b  c  d  e  f  g  h  i  j  k  l  m
//  1  2  3  4  5  6  7  8  9 10 11 12 13
//  n  o  p  q  r  s  t  u  v  w  x  y  z
// 14 15 16 17 18 19 20 21 22 23 24 25 26
// Instead of letters in encrypted word we write the corresponding number, eg. The word scout:

//  s  c  o  u  t
// 19  3 15 21 20
// Then we add to each obtained digit consecutive digits from the key. For example. In case of key equal to 1939 :

//    s  c  o  u  t
//   19  3 15 21 20
//  + 1  9  3  9  1
//  ---------------
//   20 12 18 30 21
  
//    m  a  s  t  e  r  p  i  e  c  e
//   13  1 19 20  5 18 16  9  5  3  5
// +  1  9  3  9  1  9  3  9  1  9  3
//   --------------------------------
//   14 10 22 29  6 27 19 18  6  12 8
// Task
// Write a function that accepts str string and key number and returns an array of integers representing encoded str.

// Input / Output
// The str input string consists of lowercase characters only.
// The key input number is a positive integer.

// Example
// Encode("scout",1939);  ==>  [ 20, 12, 18, 30, 21]
// Encode("masterpiece",1939);  ==>  [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]

function encode(str,  n)
{
  let nVals = n.toString().split('').map(el=>el = +el)
  return str.split('').map((el,i)=> {
    if (i < nVals.length) {
      return el = el.charCodeAt() + nVals[i] - 96
    } else {
      return el = el.charCodeAt() + nVals[i%nVals.length] - 96
    }
  })
  //originally used the below code to complete solution but refactored it to the above
//   for (let i = 0 ; i < charCodes.length ; i++ ) {
//     if (i < nVals.length) {
//       charCodes[i] += nVals[i]
//     } else {
//       charCodes[i] += nVals[i%nVals.length]
//     }
//   }
//   return charCodes
}






// Digital cypher vol 2

// Introduction
// Digital Cypher assigns to each letter of the alphabet unique number. For example:

//  a  b  c  d  e  f  g  h  i  j  k  l  m
//  1  2  3  4  5  6  7  8  9 10 11 12 13
//  n  o  p  q  r  s  t  u  v  w  x  y  z
// 14 15 16 17 18 19 20 21 22 23 24 25 26
// Instead of letters in encrypted word we write the corresponding number, eg. The word scout:

//  s  c  o  u  t
// 19  3 15 21 20
// Then we add to each obtained digit consecutive digits from the key. For example. In case of key equal to 1939 :

//    s  c  o  u  t
//   19  3 15 21 20
//  + 1  9  3  9  1
//  ---------------
//   20 12 18 30 21
  
//    m  a  s  t  e  r  p  i  e  c  e
//   13  1 19 20  5 18 16  9  5  3  5
// +  1  9  3  9  1  9  3  9  1  9  3
//   --------------------------------
//   14 10 22 29  6 27 19 18  6  12 8
// Task
// Write a function that accepts an array of integers code and a key number. As the result, it should return string containg a decoded message from the code.

// Input / Output
// The code is a array of positive integers.
// The key input is a positive integer.

// Example
// decode([ 20, 12, 18, 30, 21],1939);  ==> "scout"
// decode([ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8],1939);  ==>  "masterpiece"

function decode  (code, n) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let nVals = n.toString().split('').map(el=>el = +el)
  //   for (let i = 0 ; i < code.length ; i++ ) {
  //     if (i < nVals.length) {
  //       code[i] -= nVals[i]
  //     } else {
  //       code[i] -= nVals[i%nVals.length]
  //     }
  //   }
    return code.map((el,i)=> {
      if (i < nVals.length) {
      return alpha[el-nVals[i]-1]
      } else {
        return alpha[el -nVals[i%nVals.length]-1]
      }
    }).join('')
  }
  