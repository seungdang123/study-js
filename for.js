const arr = ['a','b','c','d'];

// for
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // => a b c d 
}



// while
let i = 0;

while (i < arr.length) {
    console.log(arr[i]); // => a b c d
    i++;
}



// do while
i = 0;

do {
    console.log(arr[i]); // => a b c d
    i++;
} while (i < arr.length) 



// for of
for (const item of arr) {
    console.log(item); // => a b c d
}



// for in
for (const index in arr) {
    console.log(index); // => 0 1 2 3
    console.log(arr[index]); // => a b c d
}

const obj = {
    color: 'red',
    width: 200,
    height: 200,
};

for (const key in obj) {
    console.log(key); // => color width height
}

