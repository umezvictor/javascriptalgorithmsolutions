//write the algorithm and function to perform a binary search
//note- binary search only works on sorted arrays

//write a function that accepts an array and a value
function binarySearch(arr, elem){

//create a left pointer at the start of the array
var start = 0; //left pointer
//and a right pointer at the end of the array
var end = arr.length - 1;//right pointer
//create midpoint
var middle = Math.floor((start + end) /2);
//while the left pointer comes before the right pointer and start <= end to prevent looking for values that dont exist
while(arr[middle] !== elem && start <= end){
    if(elem < arr[middle]){
        //move right pointer to the midpoint - 1
        end = middle - 1;
    }else{
        //move left pointer to the midpoint + 1
        start = middle + 1;
    }
    //create a new midpoint 
    middle = Math.floor((start + end) /2); 
//if you find the value you want, return the index
//if the value is too small, move the left pointer upwards
//if the value is too large, move the right pointer downwards
//if you never find the value, return -1

}

if(arr[middle] === elem){
    return middle;
}
return -1;

}


//console.log(binarySearch([2,5,6,9,13,15,28,30], 2));


//How the question is asked in interview:
//Write a recursive function that performs a binary search
//solution 2 -- using recursion

function recursiveBinarySearch(array, value, leftPosition, rightPosition) {
    // Value DNE
    if (leftPosition > rightPosition) return -1;
  
    var middlePivot = Math.floor((leftPosition + rightPosition) / 2);
    if (array[middlePivot] === value) {
      return middlePivot;
    } else if (array[middlePivot] > value) {
      return recursiveBinarySearch(array, value, leftPosition, middlePivot - 1);
    } else {
      return recursiveBinarySearch(array, value, middlePivot + 1, rightPosition);
    }
  }

  console.log(recursiveBinarySearch([2,5,6,9,13,15,28,30], 9, 0, 7));
