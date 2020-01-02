//write a function to implement linear search
//should take in array and a value
//look for the value in the array


function linearSearch(arr, val){
    //loop through array
    for(let i = 0; i < arr.length; i++){
        //check if current array element is same as value
        if(arr[i] === val){
            return i;
        }
    }
     //if val is not found
     return -1;
}

console.log(linearSearch([12,34,4,5], 5));