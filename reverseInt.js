//given an integer, return an integer that is the
//reverse ordering of numbers
//examples
//reverseInt(15) === 51
//reverseInt(981) = 189
//reverseInt(500) === 5
//reverseInt(-15) == -51
//reverseInt(-90) == -9
function reverseInt(num){
    //convert num to string, then reverse it and 
    //convert back to number using parseInt
    const reversed = num
    .toString()
    .split('')
    .reverse()
    .join('');
    //parseInt strips off leading zeros and signs
    //if a number ends with zeros, the reverse will begin with zeros
    //hence parseInt will strip them off
    //150 reverse = 051, parseInt makes it 51
    //parseInt strips off signs or characters
    //math.sign ensures the sign remains afterwards
    // //math.sign(0) = 0 for n= 0
    // //math.sign(-1) = -1 for n < 0
    // //Math.sign(1) = 1 for n > 0
    //     //apply math.sign to 
     return parseInt(reversed) * Math.sign(num);
    //math
    //return parseInt(reversed);

}
console.log(reverseInt(-189));