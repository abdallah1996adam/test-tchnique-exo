
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


function palindrome(str){
    //first solution
    // const reversedStr = str.split('').reverse().join('')
    // return reversedStr === str
    
    //second solution
    let reversedStr = "";
    for(let char of str){
        reversedStr = char + reversedStr
    }

    return reversedStr === str;
}

console.log(palindrome('abba'));