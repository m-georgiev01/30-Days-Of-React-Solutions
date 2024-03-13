import countries from './ex2-countries.mjs';
import webTechs from './ex2-web_techs.mjs';

//remove all the punctuations and change the string to array and count the number of words in the array
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

const words = text.split(/\W+/).filter(Boolean);
console.log(words);
console.log(words.length);

//In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat');

// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');

// remove 'Honey' if you are allergic to honey
const indexToRemove = shoppingCart.indexOf('Honey');

if (indexToRemove !== -1) {
  shoppingCart.splice(indexToRemove, 1);
}

// modify Tea to 'Green Tea'
const indexTea = shoppingCart.indexOf('Tea');

if (indexTea !== -1) {
  shoppingCart[indexTea] = 'Green Tea';
}

console.log(shoppingCart);

//In countries array check if 'Ethiopia' exists in the array if
// it exists print 'ETHIOPIA'.If it does not exist add to the countries list.
if (!countries.includes('Ethiopia')) {
  countries.push('Ethiopia');
} else {
  console.log('ETHIOPIA');
}

//In the webTechs array check if Sass exists in the array and if it exists
//print 'Sass is a CSS preprocess'.If it does not exist add Sass to the array and print the array.
if (!webTechs.includes('Sass')) {
  webTechs.push('Sass');
  console.log(webTechs);
} else {
  console.log('Sass is a CSS preprocess');
}

//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
