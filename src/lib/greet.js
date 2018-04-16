'use strict';

const greet = require('./lib/greet');

console.log(greet.hi());
console.log(greet.bye());


//to go with Template strings:
console.log(greet.hi('Birdie'));
console.log(greet.bye('Billie'));


// in terminal, type node main.js