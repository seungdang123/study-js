// Copy
let a = 10;
let b = a;

b = 20; // a = 10, b = 20

// Copy mechanism => b isnt affected.


// Reference
let o = {
    isLoading: false,
};

function foo(o) {
    o.isLoading = true;
};

const o2 = o;

foo(o2); // => o.isLoading: true

// Both have addresses pointing to one place. => o.isLoading was affected.
// Object is always unique. => Ref

console.log('Done...');