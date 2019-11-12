//this file will be called in index.js
//implement a 'peek' method in this Queue class
//peek should return the last element from the queue without removing it
//i mean the last element or next element to be returned
class Queue{
    constructor(){
        this.data = [];
    }

    //add method - add an element to the front if the queue
    add(record){
        this.data.unshift(record);
    }

    //return the last element in the array - it removes it from the array
    remove(){
        return this.data.pop();
    }

    //peek - return the next/last element without removing it
    peek(){
        return this.data[this.data.length - 1];
    }
}