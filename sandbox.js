function reverseInt(num){
    const rev = num.toString().split('').reverse().join('');
    console.log(parseInt(rev) * Math.sign(num));
    
}
reverseInt(-2340);