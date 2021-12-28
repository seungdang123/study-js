let x = 10;
const y = 200;

const obj = {
    height: 200,
    width: 300,
};

x = 30; // x = 30
y = 500; // error

obj.height = 300; // obj.height = 300

obj = 100 // error

// It is better to use as many constants as possible.