// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Array</h1>`;

/**
 * What is Higher order Function ?
 * What is parameters and What is arguments ?
 * What is callback vs Higher Order Function ?
 */

const log = (...data) => console.log(...data);
const clear = () => console.clear();

var string1 = 'Hello World';
var num1 = 123;
var obj = { name: 'Srini', age: 20, gender: 'Male' };
var arr = [
  'String', // element of string type
  1, // element of number type
  false, // element of boolean type
  null, // element of null type
  undefined, // element of undefined type
  [1, 2, 3], // element of object type
  { name: 'Srini', age: 20, gender: 'Male' }, //element of object type
];

log(Array.isArray(obj));

// in function whatever
// variables or data present inside the
// c bracket will be parameters
function data(name, age, gender) {
  log(name, age, gender);
}

data('Srini', 20, 'M');

/*paramerter vs arguments */
// this is a prameter function
function data(name, age, gender) {
  log(name, age, gender); // arguments
}
function data2() {
  log(arguments); // js keyword
}
log(arr);
// data2("Srini",20,"M")

//What is higher order function
// -> either it can take functions as an input parameter or it can return a function

// Pseudocode for higher order function
/***
 * function function1( function () {}){
 * return function a(){};
 * }
 */

clear();

let arr2 = [];
// How to Insert element inside an array ? Create
// How to access eleemnt inside an array ? Read
// How to modify the element inside an array ? Update
// how to delete element inside an array ? Delete

// insert element inside an array at the last position
arr2.push(1);
arr2.push('Srini');

// insert element inside an array at the front position
arr2.unshift(2);
arr2.unshift('Xavier');

// read element inside an array

log(arr2[2]); // array starts with index 0
// what is array length
log(arr2.length); // length will always start from 1, why ? coz it is for human redable format

log(
  'dynamically accessing last element in an array :: ',
  arr2[arr2.length - 1]
);

for (let i = 0; i < arr2.length; i++) {
  log('elements at position ' + i, arr2[1]);
}

log(arr2);
