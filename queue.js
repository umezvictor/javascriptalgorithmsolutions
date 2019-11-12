/**
 * queues are implemented in javascript using array methods such as unshift and pop
 * unshift adds an element to the beginning of the array its opposite of push which adds an element to the end 
 * pop returns the element at the very end
 * 
 * you can create a queue as a class, but the methods
 * will be array methods
 * 
 * its not a must, just a good way to restrict another
 * person from treating it as an ordinary array and moffifying it wrongly
 * 
 * 
 * 
 * 
 */
//  

 class Queue {
    constructor(){
        //create an array  when an instance of the class is created
        this.data = [];
    }

    //add method
    add(record){
        //add an element to the front of the array
        this.data.unshift(record);
    }

    remove(){
        //pop the last item
        return this.data.pop();
    }
 }

 