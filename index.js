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
  log('elements at position ' + i, arr2[i]);
}

// modification
// mutable - original array can be changed
// immutable - original array cannot be changed

let arr3 = arr2.map(function (i) {
  return i;
}); //immutable

// How to modify the element inside an array ? Update

// log('before splice operation', JSON.parse(JSON.stringify(arr2)));

// arr2.splice(0,2); // without insert array delete and return
// arr2.splice(0,2,"Data1") // with insert array return after delete and insert

// log('after splice operation', arr2);
// log(arr3);
log('before slice operation', JSON.parse(JSON.stringify(arr2)));

//immutable
var slicedItems = arr2.slice(0, 2);
log(slicedItems);

log('after slice operation', arr2);

// how to delete element inside an array ? Delete
// delete elemnt from the end position
arr2.pop();
// delete element from th start position
arr2.shift();

log(arr2);

//Higher order functoin
// map - transform an array value
// filter - filter the array values
// find - to get first match element from an array
// some - any one element can be matched from an array but it return boolean(true/false)
// every - each and every element ina an array should match the conditions but it return boolean
// findIndex - based on matched eleement in array it will return index position
// sort - sorting in an array (ascending and descending).

// function = function(){  return }
// shortcut /fat arrow function = () => {}

let skills = [
  'angular',
  'html5',
  'css3',
  'nodejs',
  'bootstrap5',
  'rxjs',
  'ngrx',
  'javascript',
  'jquery',
  'ajax',
  'nestjs',
  'expressjs',
];

// capitalize all skills set using MAP

let capitalize = skills.map((item, index, arr) => {
  let firstCharacter = item.substring(0, 1);
  let capitalizeFirstChar = firstCharacter.toUpperCase();
  let remainigCharacters = item.substring(1, item.length);
  return capitalizeFirstChar + remainigCharacters;
});

// filter all skills set having js

let jsBasedSKillSet = skills.filter((item, index, array) => {
  if (item.includes('js')) return item;
});

let nestJsAsSkillSet = jsBasedSKillSet.find((item, index, array) => {
  if (item.includes('nestjs')) return item;
});

let nestJsAsSkillSetIndex = skills.findIndex((item, index, array) => {
  if (item.includes('nestjs')) return item;
});

//sample for every  success
let isJsPresentSuccessCase = jsBasedSKillSet.every((item, index, array) => {
  if (item.includes('js')) return item;
});

//sample for every  failure
let isJsPresentFailureCase = skills.every((item, index, array) => {
  if (item.includes('js')) return item;
});

//some for some  success
let isAnyOneJsPresentSuccessCase = jsBasedSKillSet.some(
  (item, index, array) => {
    if (item.includes('js')) return item;
  }
);

//sample for some  failure
let isAnyOneJsPresentFailureCase = ['A', 'B', 'C'].some(
  (item, index, array) => {
    if (item.includes('js')) return item;
  }
);

// log(isAnyOneJsPresentSuccessCase, isAnyOneJsPresentFailureCase);

// join - array to string
// concat - concat two array immutable operation
// includes - returns boolean if condition matched
// indexof - return index if condition mathces else return -1

let skillAsString = capitalize.join(';');

let concatedSKills = skills.map((i) => i.toUpperCase()).concat(skills);

log(concatedSKills.includes('express2js'));
log(concatedSKills.indexOf('expressjs'));

log(
  concatedSKills.sort((currentItem, nextItem) =>
    currentItem.localeCompare(nextItem)
  )
); // ascending order
log(
  concatedSKills.sort((currentItem, nextItem) =>
    nextItem.localeCompare(currentItem)
  )
); // descending order
