"use strict";

// // Synchronous callback
function syncFN(print) {
    print(print);
}
syncFN(() => console.log('Sync callback'));

// // Asynchronous callback
function asyncFN(print, timeout) {
    setTimeout(print, timeout);
}
asyncFN(() => console.log("Async callback"), 2000);

// Callback Hell
const wait = (inputStr, callback) => {
    setTimeout(() => {
        console.log(inputStr);
        callback();
    }, 500);
};

wait('A', () => {
    wait('B', () => {
        wait('C', () => {
            return;
        });
    });
});

// A -> B -> C

// Callback to Promise

const wait2 = inputStr => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(inputStr); 
            resolve();
        }, 500)
    });
};


wait2('X')
    .then(() => wait2('Y'))
    .then(() => wait2('Z'));




