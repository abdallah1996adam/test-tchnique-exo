// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  //fisrt we need to convert str to an object in order to get the number of itration for every letter
  let max = 0;
  let charMax = "";
  let charMap = {};

  for (let char of str) {
    //first we check if the letter exist already in the object if it's then we increment by adding the rest of the letters
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  //now itreating throw the object in order to return the character that is most commonly used in the string
  for (let char in charMap) {
      //we check if the value is greater than max which is 0 then we assign that value to max and assign that key which is the letter to charMax 
    if (charMap[char] > max) {
      max = charMap[char];
      charMax = char;
    }
  }

  //at the  end we return return the most commonly character
  return charMax;
}

console.log(maxChar("apple 52852555555555555"));
