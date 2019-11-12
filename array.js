//A complete guide on how to work with arrays in Javascript 

//ways to create an array in js
//const arr = new Array('bag', 'shoe', 'food', 'car');
//const arr = new Array(2);//creates an array of length 2, but undefined elemnts

const arr = ['bag', 'shoe', 'food', 'car'];

//add new elements to the array
// arr[3] = 'food';
// arr[2] = 'car';

//array length
//also means the largest index plus one -- surprised??

//const arrLength = arr.length;
//arr[123] = 'boat';
//console.log(arr.length)  -- gives 124 -- lol
//array length is writeable manually
//if you decrease, it truncates part of the array
//arr.length = 2;
//console.log(arr); //returns bag and shoe
//fastest way to clear an array
//set length to 0
// arr.length = 0
// console.log(arr);

//array can contain mixed values, objects, functions

// const arr2 = ['Precious', {name: 'Victor'}, function(){return true;}]


//shift, unshift, pop, push
//you can add in several elements with push method
//arr.push('chair', 'men')

//pop --remove the last element -- car
//returns bag, shoe, food
//const last = arr.pop();  //-- returns car

//the array will be short of one element

//shift and unshift

//shift removes elements from the begining of the array
//const first = arr.shift();

//add new element to the beginning of the array
//const newelement = arr.unshift('Money')

//looping through an array 
//using regular for loop
for(let i = 0; i<arr.length; i++){
    //console.log(arr[i]);
}

//using for of loop
//return only values, cant access index
for(let item of arr){
    //console.log(item);
    //console.log(item[0]);//returns first charcter of each element
}

//multidimensional arrays

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
 
//matrix[0][1]
//look in the first subarray -- index 0
//return the element with index 1 -- gives us 2




//to notes
console.log([] + 1);// 1
console.log([1] + 1);//11
console.log([1,2] + 1);//1,21