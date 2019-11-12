//naive search algorithm
//function to find the count (frequency of occurence) of a subtring within a string
                                                         //     in                                             
function naiveSearch(longString, subString){
    //init counter
    var count = 0;
    //loop through longString
    for(var i = 0; i < longString.length; i++){
        //loop through short string
        for(var j = 0; j < subString.length; j++){
            //if match not found--ensures it is comparing sequentially
            if(subString[j] !== longString[i+j]) break;
            //if inner loop is completed and match found, increment count
            if(j === subString.length - 1) count++;
        } 
    }
    return count;
}

//console.log(naiveSearch("football ball foot", "foot"));

//swapping algorithm
//es5
function swap(arr, index1, index2){
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

//es2015
// const swap = (arr, index1, index2) => {
//     [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
// }

//bubble sort algorithm
//start looping with a variable called i the 
// end of the array towards the beginning
//start an inner loop with a variable called j from the beginning until i-1
//if arr[j] is greater than arr[j+1] swap those two values
//return the sorted array
//if no swaps was made break out
//[1,2,4,45,3,22,16]
function bubbleSort(arr){
    //stop comparison at the end of the array each time, decrease i
    //star
    for(var i = arr.length; i > 0; i--){
        var noSwaps;
        for(var j = 0; j < i - 1; j++){
            noSwaps = true;//no swap yet
            if(arr[j] > arr[j+1]){
                //swap
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;//no swpas left
            }
        }
       if(noSwaps) break;
    }
    return arr;
}

//console.log(bubbleSort([37,45,29,8,12,88,-3]));


//selection sort algorithm
function selectionSort(arr){
    //loop through and set the first element as the current lowest
    for(var i = 0; i < arr.length; i++){
        var lowest = i;//set first item to lowest
        //loop again and compare with the next item i+1
        for(var j = i+1; j < arr.length; j++){
            //console.log(i,j); it compares 34 to 22,10 etc, next i moves to 22 j moves to 10 ...
            //check if the current lowest is > arr[j]
            if(arr[j] < arr[lowest]){
                //set new lowest to j
                lowest = j;
            }
        }
        //swap arr[i] with arr[lowest], where lowest = j
        if(i !== lowest ){
            //if no numberr found to be less the i
            var temp = arr[i];
            arr[i] = arr[lowest];//refers to j in the second forloop
            arr[lowest] = temp;    
        } 
    }
    return arr;
}
//console.log(selectionSort([34,22,10,19,17]));

//insertion sort algorithm
function insertionSort(arr){
    //set i to second item idex 1 j to i-1
    //compares i item to j and swapps
    for(var i = 1; i < arr.length; i++){
        var currentVal = arr[i];
        for(var j = i-1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j];//push greater value forward
        }
        arr[j+1] = currentVal;
    }

    return arr;
}

console.log(insertionSort([2,1,9,76,4]));

