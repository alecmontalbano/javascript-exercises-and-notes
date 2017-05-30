/*jshint esversion: 6*/
//Lets talk about functions

// What are functions?
// A way of bundling a piece of repetitive code into a reusable chunk

// Named function declarations - available anwhere in this file
function launchTheMissiles(){
  console.log('Launching the missiles');
}

// Our first functions
function square(num){
  //launchTheMissiles(); // This is bad
  return num * num;
}

const squareOfTwo = square(2);
//console.log(num);// DNE outside the function
                // variable are encased in functions
console.log('squareOfTwo', squareOfTwo);




//console.log('Cube of 2 before: ', cube(2));// BROKE: variable not defined
// assign functions to variables
const cube = function(num){
  return num * num * num;
};
// const cubeFatArrow = (num) => {
//   return num * num * num;
// };
//Alternatively
const cubeFatArrow = num => num * num * num;

console.log('cubeFatArrow of 2: ', cubeFatArrow(2));
console.log('Cube of 2 after: ', cube(2));
