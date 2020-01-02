/**
 * Write a function that accepts a positive number N
 * the fuction should console log a pyramid shape
 * with N level using the # character. Make sure the
 * pyramid has spaces on both the left and right hand
 * sides
 * 
 * eg pyramid(1)
 *  '#'
 * pyramid(2)
 * 
 * ' # '
 * '###'
 * 
 * pyramid(3)
 * 
 * '  #  '
 * ' ### '
 * '#####'
 */

 //solution 1 -- using iterative method

 function pyramid(n){
    //calculate the midpoint index
    const midpoint = Math.floor((2 * n - 1) / 2);
    //loop through the rows, row cant't be more than rows
    for(let row = 0; row < n; row++){
        //empty string to hold the characters and spaces
        let level = ''; 
        //loop through the columns
        //columns are 2*n - 1 long; i.e 3 rows give 5 columns
        for(let column = 0; column < 2 * n - 1; column++){
            //get the bounds to add the space or #
            //i.e the elements to the right and left of the midpoint
            //but the number of rows determine how many # or space to add
            if(midpoint - row <= column && midpoint + row >= colummn){
                level += '#';
            }else{
                level += ' ';
            }
        }

        console.log(level);
    }

}