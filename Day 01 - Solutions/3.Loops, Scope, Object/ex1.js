//Create an empty object called dog
const dog = {};

// Print the the dog object on the console
console.log(dog);

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Doggo';
dog.legs = 4;
dog.color = 'black';
dog.age = 5;
dog.bark = () => {
  return 'woof woof';
};

// Get name, legs, color, age and bark value from the dog object
console.log(dog);
console.log(dog.bark());

// Set new properties the dog object: breed, getDogInfo
dog.breed = 'mystery';
dog.getDogInfo = () => {
  return 'important dog info';
};
