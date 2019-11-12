/**
 * write a function that returns the number of vowels used in a string
 * eg
 * vowels('Hi there') = 3
 */

//iterative solution -- highly recommended
 function vowels(str){
     //create a count variable
    let counter = 0;
    const checker = ['a', 'e', 'i', 'o', 'u'];
     //loop through -- convert to lowercase optional
    for(let char of str.toLowerCase()){
         //check if the character is included in checker
        if(checker.includes(char)){
            //the includes method is availabe for strings and array
             counter++;
         }
     }

     //return counter
     return counter;
 }


 //alternate solution
 function vowels(str){
  const matches = str.match(/[aeiou]/gi);//returns an array of all matched found
  //the g ensures we dont stop at the first match found
  //the i stands for case insensitive
  //match method returns null of no match is found
    //check if matches is null or array, return the array lenght if array, or 0 if null
    return matches ? matches.length : 0;
    
}
 //console.log(vowels('hello there'));