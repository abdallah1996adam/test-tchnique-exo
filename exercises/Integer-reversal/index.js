// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(num) {
  //first we convert the number to string then we convert the string to an array then we use reverse it then we join it back to a string
  const numberStr = num.toString().split("").reverse().join("");

  // at the end we use the method parseInt to convert numberStr back to a number then we use the method math.sign to return a negative number if it's negative or positive if it's positive
  return parseInt(numberStr) * Math.sign(num);
}

console.log(reverseInt(-90));
