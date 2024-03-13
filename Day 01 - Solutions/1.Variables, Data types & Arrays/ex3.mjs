import countries from './ex3-countries.mjs';

//The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//- Sort the array and find the min and max age
ages.sort();
console.log('Min -> ' + ages[0]);
console.log('Max -> ' + ages[ages.length - 1]);

//- Find the median age(one middle item or two middle items divided by two)
const midIndex = Math.floor(ages.length / 2);
let medianAge;
if (ages.length % 2 === 0) {
  medianAge = (ages[midIndex - 1] + ages[midIndex]) / 2;
} else {
  medianAge = ages[midIndex];
}

console.log('Median age -> ' + medianAge);

//- Find the average age(all items divided by number of items)
const sum = ages.reduce((acc, age) => acc + age, 0);
const avg = sum / ages.length;
console.log(avg);

//- Find the range of the ages(max minus min)
console.log(ages[ages.length - 1] - ages[0]);

//- Compare the value of(min - average) and(max - average), use abs() method
console.log(Math.abs(ages[0] - avg).toFixed(2));
console.log(Math.abs(ages[ages.length - 1] - avg).toFixed(2));

//Slice the first ten countries from the countries array
console.log(countries.slice(0, 10));

//Find the middle country(ies) in the countries array
const midIndexCountries = Math.floor(countries.length / 2);

if (countries.length % 2 === 0) {
  console.log(
    countries[midIndexCountries - 1] + ' ' + countries[midIndexCountries]
  );
} else {
  console.log(countries[midIndexCountries]);
}

//Divide the countries array into two equal arrays if it is even.
//If countries array is not even, one more country for the first half.
const countiresPartOne = countries.slice(0, midIndexCountries + 1);
const countriesPartTwo = countries.slice(midIndexCountries + 1);

console.log(countiresPartOne.length);
console.log(countriesPartTwo.length);
