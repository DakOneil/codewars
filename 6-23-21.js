// Are there any arrows left?

// Check your arrows
// You have a quiver of arrows, but some have been damaged. The quiver contains arrows with an optional range information (different types of targets are positioned at different ranges), so each item is an arrow.
// You need to verify that you have some good ones left, in order to prepare for battle:

// anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])
// If an arrow in the quiver does not have a damaged status, it means it's new.

// The expected result is a boolean, indicating whether you have any good arrows left.

function anyArrows(arrows){
    // arrow it
    return arrows.some(a=>!a.damaged)
  }





//   !a == a ?!

//   You task to pass only this tests :

// a == false
// !a == false
// a == !a

const a = []





// Points of Reflection

// Task
// Given two points P and Q, output the symmetric point of point P about Q. Each argument is a two-element array of integers representing the point's X and Y coordinates. Output should be in the same format, giving the X and Y coordinates of point P1. You do not have to validate the input.

// This kata was inspired by the Hackerrank challenge Find Point

function symmetricPoint(p, q) {
  let a = p[0] - q[0]
  let b = p[1] - q[1]
  return [q[0]-a, q[1]-b]
}