// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(str1, str2) {
  return cleanString(str1) === cleanString(str2);
}

//first we will create a helper function to clean the string
function cleanString(str) {
  //withe the help of regex we R going to replace any character that is not a number or lowerCase, upperCase letter with no thing or an empty string
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

console.log(anagrams("RAIL! SAFETY!", "fairy tales"));
