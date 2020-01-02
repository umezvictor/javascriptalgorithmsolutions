//how would you use a closure to create a private counter
function counter(){
    var _counter = 0;
    //return object with several functions to modify the private _counter variable
    return {
        add: function(increment){ _counter += increment; },
        retrieve: function(){ return 'counter is at ' + _counter }
    }
}

var c = counter();
c.add(5);
console.log(c.retrieve());