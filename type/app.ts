function addAge(age: number): number {
    return age + 1;
}

let age: number = addAge(30);

console.log(age); // => 31

addAge("30") // => type error