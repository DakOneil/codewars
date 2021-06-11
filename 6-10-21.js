// Regexp Basics - is it a vowel?

// Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u), and false otherwise.

String.prototype.vowel = function() {
    return /^[aeiou]$/i.test(this)
};




// RGB To Hex Conversion

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b){
    // complete this function  
    if (r<0) r=0
    else if (r>255) r=255
    if (g<0) g=0
    else if (g>255) g=255
    if (b<0) b=0
    else if (b>255) b=255
    r = r.toString(16)
    g = g.toString(16)
    b = b.toString(16)
    if (r.length ==1) r = 0 + r
    if (g.length ==1) g = 0 + g
    if (b.length ==1) b = 0 + b
    return (r + g + b).toUpperCase()
  }