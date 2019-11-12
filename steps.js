/**
 * directions
 * write a function that accepts a positiive number N
 * it should console log a step made with N levels
 * using the # character. Make sure the step has
 * spaces on the right hand side
 * N represents the number of lines
 * eg steps(2)
 * '# '
 * '##'
 */
/**
 
 * 
 * 
 *
 * else add a space to stair
 * console log stair
 */
 function steps(n){
     //iterate through the rows from 0 to n
    for(let row = 0; row < n; row++){
        //create an empty string 'stair'
        let stair = '';
        //from 0 to n iterate through the columns
        for(let column = 0; column < n; column++){
            //from analysis on paper like matrix -- if you have column0 row0 column0 row1, it gives a #
            //column1 row0 gives a space
            // if the current colum is equal (i.e the index starting from 0) to or less than the current row
            if(column <= row){
                //add a '#' to stair
                stair += '#';
            }else{
                stair += ' ';//use space not empty string ''
            }
        }
        //after iterating through one full row, console log stair
        console.log(stair);
    }
 }

 steps(2);