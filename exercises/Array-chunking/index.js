// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  //first solution
  //   //first we need to create an empty array
  //   const chunkedArray = [];
  //   //get the last element in our chunkedarray

  //   for (let element of array) {
  //     const lastElement = chunkedArray[chunkedArray.length - 1];

  //     //check if the lastElement doesn't exist or if it's lenght is equal to the size of the chunkedArray becasue if it's then we are going to push a new element inside the chunkedArray with that element that we are itreating over
  //     if (!lastElement || lastElement.length === size) {
  //       chunkedArray.push([element]);
  //     } else {
  //       lastElement.push(element);
  //     }
  //   }

  //   return chunkedArray;

  //second solution

  const chunkedArray = [];
  let index = 0;

  while(index < array.length){
      chunkedArray.push(array.slice(index, index + size))
      index += size
  }

  return chunkedArray
}

console.log(chunk([4, 5, 7, 4, 5, 8, 5], 3));
