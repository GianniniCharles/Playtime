// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//Teacher Solution 2: better solution because there's less edge cases that you have to worry about.
function chunk(array, size) {
  let index = 0;
  let chunked = [];

  while(index < array.length){
    chunked.push(array.slice(index, index+size));//this will start at index, then copy a piece the size of size
    index+=size; //this is so that index doesn't iterate over something already handled.
  }
 
    
  
  
  
return chunked
}//end function chunked

module.exports = chunk;



//My solution based on teacher's logic

// function chunk(array, size) {
//   let blahArray = [1,2,3,4,5,6,7,8,9,10,11,12];
//   let chunkedArray =[];
  
  
//     for (let i=0;i<array.length;i++){
  
//       if (chunkedArray[chunkedArray.length-1] === undefined ||chunkedArray[chunkedArray.length-1].length === size){
//         // console.log('Logic for creating a new chunk then pushing more stuff into that chunk goes here!')
//         chunkedArray.push([]);
//         chunkedArray[chunkedArray.length-1].push(array[i])
//       } else {
//         chunkedArray[chunkedArray.length-1].push(array[i]);
//               console.log(chunkedArray)
  
//       } //end if statement
  
  
  
  
  
//     } //end for loop
      
    
  
  
  
//   return chunkedArray
  

// }//end function chunked



//Teacher solution 1
// function chunk(array, size) {
  
//   const chunked = [];

//   for (let element of array) {
//     const last = chunked[chunked.length -1];

//     if (!last||last.length === size) {
//       chunked.push([element]); //pushing the element IN AN ARRAY BRACKET
//     } else {
//       last.push(element); //without the array bracket
//     }
//   }
//   return chunked;
      
    
  
  
  
  

// }//end function chunked