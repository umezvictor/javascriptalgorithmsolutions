//What is “closure” in javascript? Provide an example?
/**
 * A closure is a function defined inside another function (called parent function) and has access to the 
 * variable which is declared and defined in parent function scope.
 * 
 * 
 * he closure has access to variable in three scopes:

Variable declared in his own scope
Variable declared in parent function scope
Variable declared in global namespace
 */

 //closures are self invoking

var globalVar = "abc";

// Parent self invoking function
(function outerFunction (outerArg) { // begin of scope outerFunction
  // Variable declared in outerFunction function scope
  var outerFuncVar = 'x';    
  // Closure self-invoking function
  (function innerFunction (innerArg) { // begin of scope innerFunction
    // variable declared in innerFunction function scope
    var innerFuncVar = "y";
    console.log(         
      "outerArg = " + outerArg + "\n" +
      "outerFuncVar = " + outerFuncVar + "\n" +
      "innerArg = " + innerArg + "\n" +
      "innerFuncVar = " + innerFuncVar + "\n" +
      "globalVar = " + globalVar);
  // end of scope innerFunction
  })(5); // Pass 5 as parameter
// end of scope outerFunction
})         ; // Pass 7 as parameter