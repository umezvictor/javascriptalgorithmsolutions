/**
 * function that returns numbers from 1 to n
 * for mumtiples of 3 returns "fizz" instead of the number
 * for multiples of 5 returns 'buzz'
 * returns fizzbuzz for multiples of 3 and 5
 * eg fizzBuzz(5) returns below
 * 1
 * 2
 * fizz
 * 4
 * buzz
 */
function fizzBuzz(num){
    //loop through number
    for (let i = 1; i <= num; i++){
        //check if num is a multiple of 3 and 5
        //i%15 === 0 also works, cos any no divisible by 3 and 5 is divisible by 15
        if(i % 3 === 0 && i % 5 === 0){
            console.log('fizzbuzz');
        } else if(i % 3 === 0){
            //is number a multiple of 3
            console.log('fizz');
        }else if(i % 5 === 0){
            //is number a multiple of 5
            console.log('buzz');
        }else{
            //print num if all tests fail
            console.log(i);
        }
        
    }
}

fizzBuzz(5);