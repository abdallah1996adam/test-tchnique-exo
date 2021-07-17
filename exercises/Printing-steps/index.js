// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(int) {
  //itreate through rows
  for (let row = 0; row < int; row++) {
    let stair = "";
    //itreate through columns
    for (let column = 0; column < int; column++) {
      //check if current column is greater or less than current row
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }

 
}

console.log(steps(6));
