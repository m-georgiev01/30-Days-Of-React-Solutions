// Install prompt sync https://www.npmjs.com/package/prompt-sync
const prompt = require('prompt-sync')();

//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough
//to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
const localAge = 18;
let ageInput = prompt('Enter your age: ');
ageInput = Number(ageInput);

if (ageInput >= localAge) {
  console.log('You are old enough to drive.');
} else if (ageInput < 0) {
  console.log('incorrect value input');
} else {
  let waitYear = localAge - ageInput;
  console.log(`You are left with ${waitYear} years to drive.`);
}

//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result
//to console stating who is older(me or you).Use prompt(“Enter your age:”) to get the age as input.
const myAge = 22;
let yourAge = prompt('Enter your age: ');
yourAge = Number(yourAge);

if (yourAge >= myAge) {
  console.log(`You are  ${yourAge - myAge} years older than me.`);
} else if (myAge > yourAge) {
  console.log(`You are  ${myAge - yourAge} years younger than me.`);
} else {
  onsole.log('incorrect value input');
}

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
//using if else
let a = 4;
let b = 3;

if (a > b) {
  console.log(a + ' is greater than ' + b);
} else {
  console.log(a + ' is less than ' + b);
}

//ternary operator.
const result = a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`;
console.log(result);

//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let numberInput = prompt('Enter a number: ');
numberInput = Number(numberInput);

if (numberInput % 2 == 0) {
  console.log(`${numberInput} is an even number. `);
} else if (numberInput % 2 == 1) {
  console.log(`${numberInput} is an odd number.`);
} else {
  console.log('incorrect value input');
}
