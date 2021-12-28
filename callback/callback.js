'use strict';

// JavaScript is synchronous.
// Execute the code block by in order after hoisting.
// hoisting: var, function declaration move to top of code

console.log('1');

// callback function
setTimeout(() => console.log('2'), 1000);
console.log('3');
 


// Synchronous callback
function printImmediately(print) {
    print();
}

printImmediately(() => console.log('hello'));


// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log("async callback"), 2000);





// Callback Hell example
class UserStorage {
    loginUser(id, pw, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'seung' && pw === "hwan") ||
                (id === 'chicken' && pw === "beer")
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'seung') {
                onSuccess({ name: 'seung' , role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}


const userStorage = new UserStorage();
const id = prompt('enter your id');
const pw = prompt('enter your password');
userStorage.loginUser(
    id,
    pw,
    (user) => {
        userStorage.getRoles(
            user, 
            (userWithRole) => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            (error) => {
                console.log(error)
            }
            );
    },
    (error) => {console.log(error)}
    )