function addAge(age) {
    if(typeof age === 'number') {
        return age + 1;
    } else {
        throw "ERROR!!"
    }
}

let age = addAge('30');

console.log(age) // => 301

// It is convenient to be able to change the type of a variable as desired, 
// but on the other hand, it causes poor stability.
age = 10; 
age = false;
age = {}

