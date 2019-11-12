/**
 * given a fixed length array 
 * write a function that duplicates each occurence of zero
 * and shifts the remaining items to the right
 * 
 * note, elements beyond the length of the original array are not written
 * 
 * eg duplicateZeros([1,0,3,0,1,1])
 * array has a length of 6
 * output = [1,0,0,3,0,0]
 */
 
 function duplicateZeros (inputArray){
    //get the length of the input array
    const inputArrayLength = inputArray.length;

    //init new array to hold output
    let outputArray = [];
    
    //loop through the input array
    for(let i = 0; i < inputArray.length; i++){
        //push the element into the new array whether it is 0 or not
       outputArray.push(inputArray[i]);
       //proceed to next test
       if(inputArray[i] === 0){
           //push the element (if zero) into new array
           //you can also push a variable holding zero manually 
           outputArray.push(inputArray[i]);
       }
    } 
    //ensure the output doesn't exceed the length of the original input array
    const finalOutput = outputArray.slice(0, inputArrayLength);

    //return output
    return finalOutput;
    
 }

 console.log(duplicateZeros([0,1,0,3,1,1]));
 