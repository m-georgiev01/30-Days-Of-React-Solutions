// Declare an empty array;
const arr1 = [];

// Declare an array with more than 5 number of elements
const arr2 = [1, 2, 3, 4, 5, 6];

// Find the length of your array
console.log('Arr2 length ' + arr2.length);

// Get the first item, the middle item and the last item of the array
console.log('First: ' + arr2[0]);
console.log('Middle: ' + arr2[Math.floor(arr2.length / 2)]);
console.log('Last: ' + arr2[arr2.length - 1]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array.
//The array size should be greater than 5
const mixedDataTypes = [1, 'two', 3, 'four', 5, 6];
console.log('MixedDataTypes length: ' + mixedDataTypes.length);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
];

// Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
console.log(itCompanies.length);

// Print the first company, middle and last company
console.log('First: ' + itCompanies[0]);
console.log('Middle: ' + itCompanies[Math.floor(itCompanies.length / 2)]);
console.log('Last: ' + itCompanies[itCompanies.length - 1]);

// Print out each company
itCompanies.forEach((el) => {
  console.log(el);
});

// Change each company name to uppercase one by one and print them out
itCompanies.forEach((el) => {
  console.log(el.toUpperCase());
});

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(
  itCompanies.slice(0, -1).join(', ') +
    ' and ' +
    itCompanies[itCompanies.length - 1] +
    ' are big IT companies.'
);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if (itCompanies.indexOf('Ozone') !== -1) {
  console.log('Ozone');
} else {
  console.log('The company is not found!');
}

// Filter out companies which have more than one 'o' without the filter method
for (let i = 0; i < itCompanies.length; i++) {
  const currElement = itCompanies[i];

  if ((currElement.toLocaleLowerCase().match(/o/g) || []).length > 1) {
    itCompanies.splice(i, 1);
    i--;
  }
}
console.log(itCompanies);

// Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies);

// Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies);

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));

// Slice out the middle IT company or companies from the array
//in this case->
console.log(itCompanies.slice(1, 3));

// Remove the first IT company from the array
console.log(itCompanies.splice(0, 1));

// Remove the middle IT company or companies from the array
console.log(itCompanies.splice(1, 1));

// Remove the last IT company from the array
console.log(itCompanies.splice(0, 1));

// Remove all IT companies
itCompanies.length = 0;
console.log(itCompanies);
