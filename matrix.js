/**
 * Write a function that accepts an integer N 
 * and returns a N*N spiral matrix
 * 
 * matrix(2)
 * [[1,2], 
 * [4,3]]
 * n2 will always be the last number in the spiral
 * matrix(3)
 * [[1,2,3],
 * [8,9,4],
 * [7,6,5]]
 */

 function matrix(n){
    //create an empty array to hold subarrays
    //the number of subarrays depends on n - we need n*n subarrays
    //loop from 0 to n and push in N subarrays into the empty results array
    const results = [];

    for(let i = 0; i < n; i++){
        results.push([]);
    }
//we can assign values to indices inside  of an array that has not been initialized
/**
 * eg const arr = []
 * arr[3] = 'hello'
 * return arr
 * output = [null, null, null, 'hello']
 * notice we didn't have to use push or unshift
 */

 //create counter variable starting at 1
 //this determines the very first number in the first subarray
 //and also will be incremented to populate the other values
 //for all the subarrays
 let counter = 1;

 /**
  * eg matrix(3) gives
  * [[1, 2, 3]
    [8, 9, 4]
    [7, 6, 5]]

notice it started with 1 -- refering to our counter
  */

 //for a 3 dimensional array, when n is 3, the last index will be 2
 //since array starts index from 0
 //hence end column and end row will be i n-1

 //init variables to hold start/end rows and colums
 let startColumn = 0;
 let endColumn = n - 1;
 let startRow = 0;
 let endRow = n - 1;

 //results[startRow][i]
 //result[startRow] means result at index of [startRow]
 //[i] means at the current  step in the iteration
 //this variables will change values per iteration
 while(startColumn <= endColumn && startRow <= endRow){
     //first for loop givess us the top row
     //first row is -   * * *


     //this loop will also take care of the very last element to be created, s
     /*last  element is  * * *
                         * * *
                         * * *
     */
     //hence no other loop needed
     for(let i = startColumn; i <= endColumn; i++){
         results[startRow][i] = counter;
         //fills all the elements of the first subaray, i.e the first row
         //only the columns is what is increasing
         //      subarray = [startRow] | element = [i]
         //meaning [subarray][element]  = counter;
         //results[0][0] = 1; since counter is 1 by default
         //results[0][1] = 2; counter increases by 1
         //results[0][2] = 3; counter increases by 1
         //so we have [1, 2, 3]
         counter++;
         //what it happening here
         //[1, 2, 3] 
         //say we are at i
         //we increment by 1, it moves us to 2
         //we increment by, moves to 3
         //then we're done iterationg from startcolumn to end column
         //the firsr subarray has been created, move on
     }
     //end of first for loop, increment startrow, move to next row  -- row 1
     startRow++;

     //create the right column right column
     /*
     we want to fill the last 2 * at the right bottom of this image
     keeping spiral movement in mind
     right column is * * *   
                         *
                         *
     */
     //now startRow won't stat from 0 again,
     //startRow will now be 1 by default
     for(let i = startRow; i <= endRow; i++){
         results[i][endColumn] = counter;
         //interpretation
         //set the element of the next subarray at the index of endcolumn
         //i.e the last element in that subarray
         //which gives us the last columns, which are -   *
        //                                                *
         counter++;
     }
     //we've filled the last two columns, time to move to the bottom rows
     //of which one of the * in the last columns above is part of
     //so we have 2 * to create, the last 2 to the left
     //means we are not starting from the original end column
     //end column has do decrease by 1
     endColumn--;
     //bottom row
     /*
     we are
     bottom row is  * * *
                        *
                    * * *
    looking for   the middle * at the bottom row
     */
     //moving from endColumn to startColumn
     for(let i = endColumn; i >= startColumn; i--){
         results[endRow][i] = counter;
         //result the subarray at the index of the endrow and the current element with the index of i
         counter++;
     }
    

     //decrement end row - moving up a bit
     endRow--;


     //start column
     /*
     start column is  * * *
                      *   *
                      * * *
     */
    //let i = endRow; i >= startRow; i--  notice we are ggoing up to get the last 2 * at the rightmost column
     for(let i = endRow; i >= startRow; i--){
         results[i][startColumn] = counter;
         counter++;
     }
     //move to middle/iner elements
     startColumn++; //so we can get the element in the 2nd, 3rd, etc column -- as per spiral movement
 }
 
    return results;
 }

 console.log(matrix(3));