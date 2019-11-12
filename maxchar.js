/*
Given a string, return the character most frequently used

the technique for solving this problem
is to convert the string to Object, where the
character is the key and the value is the 
frequency of occurence. this technique can 
be used to:
1: solve the anagram problem(if 2 strings have same characters)
2: check if a string has any repeating character
3: check most common character in a string
*/

function maxChar(str){
    //create character map - empty object to hold character key and values
    const charMap = {};
    //variable to hold the frequency of occurence
    let max = 0;
    //variable to hold the character with the most occurence
    let maxChar = '';
    //loop through the str and use it to build the charMap
    for(let char of str){
        //if character - charMap[char] - which is the key - already exists in charmap, increment value by 1
        if(charMap[char]){
            charMap[char]++;
            //char reps 'key'
            //charMap[char] reps 'value' - frequency of occurence
        }else{
            //set value to 1 if not there before 
            charMap[char] = 1;
        }
    }
    //console.log(charMap); 
    
/*example of character map - returns an object -
{
    H: 1
    e: 3
    h: 1
    l: 2
    o: 1
    r: 1
    t: 1
}
   
    */
//charMap[H] = 1
    //loop through the just created object 
    //finc which key has the highest value
    //use for in to loop through object, for of is for strings and array
    for(let char in charMap){
        //char is the key
        //if value is greater than max , set max to new number
        if(charMap[char] > max){
            max = charMap[char];
            //set the key to maxchar
            maxChar = char;//this is the key with the maximum character
        }
    }

     return maxChar;
}

console.log(maxChar("Hello there"));