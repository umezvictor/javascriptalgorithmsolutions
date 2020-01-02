/**
 this function should accept a string containing a special character
 it should reverse the string without affecting the position of the special character
 */

function reverseString(str){
    //create an empty array to hold reversed string
    let reversed = [];

    //variable to hold the special character during iteration
    let specialCharacter = '';

    //variable to hold the index of the special character during iteration
    let indexOfSpecialCharacter;

    //regular expression for alphabets
    const letters = /^[A-Za-z]+$/;

    //loop through the string
    for(let i = 0; i < str.length; i++){

        //if character is not an alphabet -- then it is a special character
        //then grab its index and the special character itself
        if(!str[i].match(letters)){
            specialCharacter = str[i];//hold the special character
            indexOfSpecialCharacter = i;//hold the index of the special character
        }else{
            //move the alphabets into the beginning of 'reversed' array -- it will store in reversed order, unlike push
             reversed.unshift(str[i]);
        }
    }
    //variable to hold the new reversed string array
    const rev = reversed;
    //splice method can insert or remove an element from an array
    //add the special character to the reversed array at the exact position it was before
    rev.splice(indexOfSpecialCharacter, 0, specialCharacter);
//           starting index     remove nothing  character to add
    //convert the array back to string and return it
    return rev.join('');//ensure to put '', else the characters will be separated by comma
}

console.log(reverseString('hel$lo'));
