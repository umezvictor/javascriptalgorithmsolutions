//write a function that allows you do this
// var addSix = createBase(6)
// addSix(10)   gives 16
// addSix(21)  gives 27

//means we have a function createBase calling an inner anonymous function -- that is a closure
//so we create a closure

function createBase(baseNumber){
    return function(n){
        return baseNumber + n;
    }
}

//to use, assign the function to a  variable
var addSix = createBase(6);
console.log(addSix(10)); 