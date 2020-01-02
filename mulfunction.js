/**
 * write a mul function that works when invoked as below syntax
 * console.log(mul((2)(3)(4))) //output = 24
 */

 //function mul takes in the first parameter as argument
//  function mul(x){
//     return function(y){
//         return function(z){
//             return x * y * z;
//         }
//     }
//  }

// alternative solutioon using e56 higher order functions
 const mul = x => y => z => {
     return x * y * z;
 }

 console.log(mul(2)(3)(4));