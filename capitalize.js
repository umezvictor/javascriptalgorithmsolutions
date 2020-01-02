/*
write a function that accepts a string. the function should capitalise
the first letter of each word in the string, then return the capitalised string
eg
capitalize('a short man') returns 'A Short Man'
*/


//solution 1
function capitalize(str){
//make an empty array called 'words' to hold the capitalised string to be returned
const words = []; 
//split the input string by space (eg string.split(' ')) to get an array
//string.split(' ') gives us an array of the different words
//if string = 'hello boy ade'; string.split(' ') = ["hello", "boy", "ade"]
//it is different from string.split('') which gives ["h","e", and so on]
//for each word in the array,
//1 Uppercase the first letter of the word
//2 join the first letter with the rest of the string using slice method
//if string = hello, string.slice(1) gives ello. it takes awway the first character
//push adds an eleemnt to the end of the array
for(let word of str.split(' ')){
    //push the uppercase of the first character of each word and concatenate 
    //it with the slice of it from index 1 --- the remaining part
    //eg H + ello = Hello
    words.push(word[0].toUpperCase() + word.slice(1));//joins it with the rest of the string
}
//3 push the result into the words array

//join 'words' array into a string and return it
return words.join(' ');//join with a space not empty string. this ensures spacing between words

}


//solution 2 -- uses manual for loop, not for of loop
//for of loop will iterate through every characeter
//but here we need to skip the very first character since we 
//will capitalise it from the beginning
function capitalize2(str){
    //capitalise the very first characeter in the string --- create a 'result' which is the first character of the input string capitalized
    //for each character in the string
    //1 if the character to the left is a space
    //then capitalise it and add it to 'result'

    let result = str[0].toUpperCase();
    //notice i = 1 not 0, means first one is skipped cos its been capitalisedx already at the top
    for(let i = 1; i < str.length; i++){
        //look to the left of the current character -- index i - 1
       //if it is a space
        if(str[i-1] === ' '){
            result += str[i].toUpperCase();
        } else{
            //append it to the existing word
            result += str[i];
        }
    }

    return result;
}

console.log(capitalize2('victor blaze precious'));