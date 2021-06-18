// Not so black box

// The kata has been preloaded with a function called blackBox. Figure out what the function does.

// You may need to think laterally!

blackBox();

console.log(blackBox());

JSopenSesame()




// Is your period late?

// In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

function periodIsLate(last, today, cycleLength)
{
   return Math.round((today - last) * 1.15741e-8) > cycleLength
}