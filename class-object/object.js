"usestrict";

// Objects
// One of the JavaScript's data types.
// A collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = {key : value};

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

const user = "seunghwan";
const age = 4;

function print(person) {
  console.log(person.user);
  console.log(person.age);
}

const seunghwan = { user: "seunghwan", age: 4 };
print(seunghwan);

// with JavaScript magin (dynamically typed language)
// can add properties later
seunghwan.hasJob = true;
console.log(seunghwan.hasJob);

// can delete properties later
delete seunghwan.hasJob;
console.log(seunghwan.hasJob);

// 2. Computed properties
// key should be always string
console.log(seunghwan.user);
console.log(seunghwan["user"]);
seunghwan["hasJob"] = true;
console.log(seunghwan.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(seunghwan, "user");
printValue(seunghwan, "age");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("seunghwan", 30);
console.log(person4);

// 4. Constructor function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: peroperty existence check (key in obj)
console.log("user" in seunghwan);
console.log("age" in seunghwan);
console.log("random" in seunghwan);
console.log(seunghwan.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in seunghwan) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4];
// for(let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user_1 = { name: "seunghwan", age: 20 };
const user_2 = user_1;
console.log(user_1);

// old way
const user_3 = {};
for (key in user_1) {
  user_3[key] = user_1[key];
}
console.clear();
console.log(user_3);

const user_4 = Object.assign({}, user_1);
console.log(user_4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
