type MyObject = {
    name?: string;
    readonly age: number;
    getFamilyName: () => string;
    getLastName: () => string;
    getBloodType: () => string;
}

const obj: MyObject = {
    name: "seung hwan",
    age: 20,

    // Basic
    getFamilyName: function () {
        return "lee";
    },

    // Arrow function
    getLastName: () => "lee",

    // Short form
    getBloodType() {
        return "A";
    }
};

obj.name; // => seung hwan
obj.age; // => 20
obj.getFamilyName(); // => lee
obj.getLastName(); // => lee
obj.getBloodType(); // => A

// obj.bloodType = "A";  =>  Add bloodType in obj
// delete obj.bloodType; =>  Delete bloodType in obj

delete obj.name;

// Class instance obj
class Person {
    _bloodType: String;

    constructor(bloodType: string) {
        this._bloodType = bloodType;
    }
    // Setter : If you use set, you can access it from outside using "=".
    set bloodType(btype: string) {
        if (btype === "A" || btype === "B" || btype === 'O' || btype === "AB") {
            this._bloodType = btype;
        }
    }
    // Getter
    get bloodType() {
        return `${this._bloodType} 형`;
    }
}

const p1 = new Person("B");

p1.bloodType; // => B
p1.bloodType = "C"; // => Not changed anything.

// Define Type in JS & writable and configurable.
const myObj = Object.create(null, {
    name: {
        value: "Lee seunghwan", 
        writable: true, // Can change value, if this value is false, this value is read only.
        configurable: false, // this value cant delete when configurable is "false".
    }
})

myObj.name; // => Lee seunghwan
