
  
// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// the first solution
function vowels(str){
    let count = 0;
    let vowelsArray = ['a','i','o', 'u', 'e']
    for (let char of str.toLowerCase()){
        if(vowelsArray.includes(char)){
            count++
        }
    }
    return count;
}
console.log(vowels('you and me'));
//the second solution
// function vowels(str) {
//     const matchVowels = str.match(/[aieou]/gi)
//     return matchVowels ? matchVowels.length : 0
    
// }
// console.log(vowels("Y"));

