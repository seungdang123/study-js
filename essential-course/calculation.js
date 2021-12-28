const colors = ['Red', 'Yellow', 'Black'];

const Colors = {
    blue: 'Blue',
    green: 'Green',
    white: 'White',
};


// const red = colors[0];
// const yellow = colors[1];
// const black = colors[2];

const [red, yellow, black] = colors;
console.log(yellow); // => Yellow

const {white, green} = Colors;
console.log(white); // => White


// if ( a === b) {
//     a = 0;
// } else {
//     a = 1;
// }

a = (a === b) ? 0 : 1;