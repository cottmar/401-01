'use strict';
//this is the recommended way. Create an object and append things to that object. 

const greet = module.exports = {};

//the name is very important. The name will be used throughout and needs to convey to the team what you are trying to achieve in that specific file. 
// greet.hi will become a function. 
greet.hi = () => {
  return 'Hello!';
};

greet.bye = () => {
  return 'Bye!';
};

//same thing, but with "quality of life" changes. Give it template strings:
greet.hi = () => {
  if (name === '' || typeof name !== 'string')
  return -1; //this isnt best practice to return null but he wants us to see it
  return `Hello, ${name}!`;
};

greet.bye = () => {
  if (name === '' || typeof name !== 'string')
  return -1;
  return `Bye, ${name}!`;
};




// module.exports = () => {
//   console.log('Hello 401');
// }; // this is very very strict. It isn't a very flexible pattern. THIS IS NOT RECOMMENDED.

// const sayHi = () => {
//   console.log('Hello');
// };

// sayHi();

// // 