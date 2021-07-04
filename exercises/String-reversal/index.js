// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverseStr(str) {
  //first  solution
  //convert it to an array then use the reverse method then join it back together
  // return str.split('').reverse().join('')

  //second solution
  // let revStr = ""
  // for(char of str ){
  //      revStr = char + revStr
  // }
  // return revStr

  //Third solution
  const reversedArr = str.split("");
  return reversedArr.reduce((reversedChar, char) => {
    return char + reversedChar;
  }, "");
}

console.log(reverseStr("Salut !"));
