//given a string, return a new string with the reversed order of characters
function reverseString(str){
    //convert str to array
    const arr = str.split('');
    arr.reverse();//reverse the elements in the array
    return arr.join(''); //merge elemnts into a single string
}

//console.log(reverseString("Victor"));

//solution 2
function reverseString2(str){
    //create an empty string called reversed
    let reversed = '';
    //loop through str
    for(let char of str){
        //char is declared each time the loop runs
        reversed = char + reversed;//add to beginning of reversed
    }
    //below also works
    // for(let i = 0; i<str.length; i++){
    //     //char is declared each time the loop runs
    //     reversed = str[i] + reversed;//add to beginning of reversed
    // }
    return reversed;
}
//console.log(reverseString2("Matthew"));

function reverseString3(str){
    //create an empty string called reversed
    //convert str to array
    return str.split('').reduce((reversed, char) => {
      return char + reversed;
    }, '');
    
}
console.log(reverseString3("Matthew"));