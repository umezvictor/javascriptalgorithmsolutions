/**
 * Implement enque deque using two stacks
 * enque -- add an element 
 * deque -- remove an element
 */

 var inputStack = [];
 var outputStack = [];

 //for enque, push the item into the first stack
 function enque(inputStack, item){
    return inputStack.push(item);
    //return inputStack;
 }


 //for deque, reverse the stack such that the first element
 //of the output stack is the last element of the input stack
 //after that pop the top of the output to get the first element that was ever 
 //pushed into the input stack

 function deque(inputStack, outputStack){
     //output stack must be empty at first
     if(outputStack.length <= 0){
         //input stack must not be empty
         while(inputStack.length > 0){
             //pop each element from input stack
             var elementToOutput = inputStack.pop();
             //push the elements poped from inputstack into output stack
             outputStack.push(elementToOutput);
         }
     }

     //by now, the element on top of the output stack is the orginal first element in input stack
     //pop the last element
     //mimicking fifo
     return outputStack.pop();
 }

 //console.log(enque([1,3,2,4], 6));
 console.log(deque([1, 3, 2, 4], [8, 7, 9, 12]));