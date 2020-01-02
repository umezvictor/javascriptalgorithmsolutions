//questions on arrays
/**
 * Being told that an unsorted array contains (n - 1) of n consecutive numbers, 
 * find the missing number in O(n) time 
 * 
 * if you have [1, 3, 2, 5]
 * when you sort it becomes [1, 2, 3, 5] 
 * the common difference is 1, except where the missing number is, which id between 3 and 5
 * and the difference is 2 
 */


function findMissingNumber(arr){

    //variable to hold the missing number
    let missingNumber;
    //variable to hold number after missing number
    let elementAfterMissingNumber;

    //sort the array to make it ordered
    var sortedArray = arr.sort((a, b) => { return a - b});
    //loop through, and find the position wher the difference is 2
    for(let i = 1; i < sortedArray.length; i++){
        if(sortedArray[i] - sortedArray[i - 1] === 2){
            //assign that number to elementAfterMissingNumber
            elementAfterMissingNumber = sortedArray[i]
        }
    }

    //calculate the missing number
    missingNumber = elementAfterMissingNumber - 1;

    return missingNumber;

}

//console.log(findMissingNumber([12, 15, 18, 13, 14, 16]));


//function to remove duplicate values from an array
//use es5 and es6


//solution 1 == using es6
function removeDuplicate(arr){
    const unique = new Set(arr);
    return unique;
}

//console.log(removeDuplicate([1, 3, 4, 5, 5, 6]));

//solution 2 -- using es5
function removeDuplicate2(arr){

    //create an empty object to hold the character map
    let harshMap = {};
    //create an empty array to hold the unique array
    const unique = [];

    //loop through the array
    for(let i = 0; i < arr.length; i++){
        //check if the harshMap already has that array element as one of its property
        //ensures only unique elements will be pushed into the unique array
        if(!harshMap.hasOwnProperty(arr[i])){
            harshMap[arr[i]] = 1;
            unique.push(arr[i]);
        }
    }

    return unique;
    
}

//console.log(removeDuplicate2([1, 3, 4, 5, 5, 6]));


//Given an array of integers, find the largest product yielded from three of the integers
//algorithm -- sort the array and multiply the last three numbers
// O(n log n)
function findHighestProduct(arr){
    // sort the array
    sortedArr = arr.sort((a, b) => a - b);
    let len = arr.length;
    //multiply the last 3 elements in the sorted array
    let maxProduct = sortedArr[len-1] * sortedArr[len-2] * sortedArr[len-3];
    return maxProduct;
  
}






