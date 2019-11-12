//given an array and chunk size, divide the array into many subarrays
//where the length of each subarray is same as the chunk size entered, i.e of length 'size'

//examples
//when size = 2; chunk([1,2,3,4], 2)  returns [[1,2], [3,4]]
//chunk([1,2,3,4,5], 2) returns [[1,2], [3,4], [5]], gives each subarray 2 elements, 5 is left after 1,2 & 3,4 are taken
//chunk([1,2,3,4,5,6,7,8], 3) returns [[1,2,3], [4,5,6], [7,8]]
//chunk([1,2,3,4,5], 10) returns [[1,2,3,4,5]],

function chunkArray(array, size){
    //create empty array to hold chunks called 'chunked'
    const chunked = [];
    //loop through each element in the input array
    for(let element of array){
         //retrieve the currentSubArray element in 'chunked'

         const currentSubArray = chunked[chunked.length - 1]; //aka last element
    //if no currentSubArray element exists or if its length is equal to chunk size
        if(!currentSubArray || currentSubArray.length === size){
        //if currentSubArray.length === size, it means it is already full, create a new one
        //it pushes in a subarray, only if no element exist or (number of elemnts) i.e currentSubArray.length === size
        //else it adds the current element we're looping over to the existing subarray
        //push a new chunk (i.e subarray) into chunked
        //at first, currentSubArray will be undefined. After the first iteration
        //a new subarray will be pushed into chunked, 
        //hence we can call currentSubArray.length in next iteration 
            chunked.push([element]);//push in an array containing the current element
        } else {
             //else if (currentSubArray is not filled)  push the current element into it
             currentSubArray.push(element);
        }
    }

    return chunked;
   
   
}
//const array = [[1,2,3], [2]];
//console.log(array.push(2)); //returns 2, treats each subarray an element
//console.log(chunkArray([1,2,3,4,5], 2));


//solution 2
function chunk2(array, size){
    //create empty 'chunked' array
    const chunked = [];
    //create index staart at 0
    let index = 0

    //while index is less than array.length
    while(index < array.length){
        //cal the slice methiod start at index, end at index+size
        //slice returns from the start to the element before the end index specified
        chunked.push(array.slice(index, index + size));
          //push a slie of length 'size' from 'array' into chunked
             //add size to index- ensures we start at the remainig part of the array
             index += size;
    }

  return chunked;
 
}
console.log(chunk2([1,2,3,4,5], 2));