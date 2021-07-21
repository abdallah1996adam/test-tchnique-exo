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
 
  for(let row =0; row< int; row++){
    let stair = ""
    for(let column =0; column< int; column++){
      if(column <= row){
        stair += "#"
      }else{
        stair+= " "
      }
    }
    console.log(stair);
  }
}

steps(9)





// Code une fonction pour trouver le maximum du tableau t, sans utiliser de fonction "max".
// Code une fonction, dans le langage de ton choix, qui détermine s’il existe 3 entiers dans le tableau T dont le produit fait 30. js