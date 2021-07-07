// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(sentence) {

   //first we declare an empty array
   let words = [];
    //we iterate throug every word after transforming it into an array withe the help of split
    for(let word of sentence.split(' ')){
        words.push(word[0].toUpperCase()+word.slice(1))
    }
    return words.join(' ')
  
}

console.log(capitalize('look, it is working!'));
