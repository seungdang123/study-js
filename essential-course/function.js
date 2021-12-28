function myFn(x) {
    return x + 100;
}

// function sum(a, b, c) {
//     return a + b + c;
// }

// a & b are neccesary.
function sum(a, b, ...args) {
    let s = 0;
    for (let i = 0; i < arguments.length; i++) {
        s = s + arguments[i];
    }
    return s;
}

const result = myFn(10);
const abcSum = sum(10, 20, 30);

// anonymous function
const myFnV2 = function () {
    return 100;
};

myFnV2();

sum.call(null, 10, 20, 30);

const arr = [10, 20, 30, 40, 50]
sum.apply(null, arr);

// immediate execution function
// Disappears after running
(function () {
    console.log("즉시 실행 함수 실행");
})();


// Arrow function.
const sumV2 = (a, b, ...args) => {
    let s = 0;
    for (let i = 0; i < arguments.length; i++) {
        s = s + arguments[i];
    }
    return s;
}


// Generator function.
function* gen() {
    yield 10;
    yield 20;
    return 30;
}

const g = gen();

g.next();
g.next();
g.next();


// async function.
async function myTask() {

}

