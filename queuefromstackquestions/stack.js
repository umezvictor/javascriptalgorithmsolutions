/**
 * implement a stack data structure with javascript
 * a stacck is similar to a queue
 * the difference is the order of adding and removing items
 * stack is first in last out - filo
 * queue is - first in first out
 * we use push, pop and peek methods for stack
 */

 //stack class will be implemented with an array
 class Stack{
    constructor(){
        this.data = [];
    }

    //add a new record to the top/end of the stack
    add(record){
        this.data.push(record);
    }

    //return the last item
    remove(){
        return this.data.pop();
    }

    //peek - return the last item without removing it
    peek(){
        return this.data[this.data.length - 1];
    }
}