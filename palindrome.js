//function to check if a word is a palindrome
//palindromes are strings that return the same word if reversed
//return true or false
//eg palindrome('ada') = true
function palindrome(str){
    //empty string to hold reversed word
    let reversed = '';
    for(let char of str){
        reversed = char + reversed;//build the reversed string for each iteration
    }
    //check if reversed === str
    if(reversed === str){
        return true;
    }else{
        return false;
    }
}

//console.log(palindrome('adamada'));

function palindrome2(str){
    //using helper methods
    //use the every helper method - first convert str to array
    return str.split('').every((char, i) => {
        //compare each character with the one at the end of the 
        //array and move downwards to the centre
        return char === str[str.length - i - 1];
    });
}
console.log(palindrome2('adamfrada'));