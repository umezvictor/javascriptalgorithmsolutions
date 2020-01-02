//function to check if two strings are anagrams of each other
/**
 One string is an anagram of another if it uses the 
 same characters in the same quantity
 only consider characters not spaces or punctuautions.
 consider capital letters to be same as lowercase

 examples
 anagram('rail safety', 'fairy tales') -- true
 anagram('Rail safety!', 'fairy tales') -- true
 anagram('Hi there', 'Bye there') -- false


 tip
 regexp helps in this case
 eg
 const word = 'Hi There!!!' 
 remove spaces and exclamation and replace with empty string
 word.replace(/[^\w]/g, "")
 you can chain another methos to convert to lowercase
 word.replace(/[^\w]/g, "").toLowerCase()

 example of character map
 //hello
 {
    charmap[char]: value
    H: 1
    e: 3
    h: 1
    l: 2
    o: 1
    r: 1
    t: 1
}
 */

 function anagrams(stringA, stringB){
//generate a character map for each string and compare
//check the character length, see if they match
    //use helper function created below to do comparison
    const aCharMap = buildCharMap(stringA);//creates character map of stringA
    const bCharMap = buildCharMap(stringB);//creates character map of stringB

    //check if both have the same number of keys, helps
    //to be sure they have the same number of characters
    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
        return false;
    }
    
    //check if the frequency of occurence (value or charMap[char]) of characters match 
    //pick any of the charMapa and loop through it
    //use for in to loop through objects since charmap is an object
    for(let char in aCharMap){
        if(aCharMap[char] !== bCharMap[char]){
            return false;
        }
    }

    //return true if it all works
    return true;
 }

 //helper function to create character map for a given string
 function buildCharMap(str){
     //create empty object to hold character map 
     const charMap = {};
     //loop through character and clean it up same time, 
     //by replacing special characters, punctuautions and spaces
     //with empty string
     //ensures we are loopin through a clean string
     for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
         //build charmap 
         //charMap[char] = value
         //increment value if charMap[char] by 1 if it already exists in charMap
         //set value to 1 if it doesn't exist before
         charMap[char] = charMap[char] + 1 || 1;//or 1 of it doesn't exist

        // this is the long form for the above 
        //  if(charMap[char]){
        //     charMap[char]++;
        // }else{
        //     charMap[char] = 1;
        // }
     }

     return charMap;
 }


 console.log(anagrams('rail safety', 'fairy tales'));