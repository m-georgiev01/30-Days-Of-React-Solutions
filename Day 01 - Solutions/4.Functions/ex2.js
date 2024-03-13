// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value
// or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a = 0, b = 0, c = 0) {
  const discriminant = b * b - 4 * a * c;

  if (discriminant < 0 || (a === 0 && b === 0 && c === 0)) {
    return 'No real roots';
  } else if (discriminant == 0) {
    const root = -b / (2 * a);
    return `Single real root: ${root}`;
  } else {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return `Two real roots: ${root1} and ${root2}`;
  }
}

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(array) {
  for (const value of array) {
    console.log(value);
  }
}

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
  var options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };

  var today = new Date();

  console.log(today.toLocaleDateString('en-150', options));
}

// Declare a function name swapValues. This function swaps value of x to y.
function swapValues(a, b) {
  [a, b] = [b, a];
  console.log(a + ' ' + b);
}

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr) {
  const reversedArray = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr) {
  const capitalized = [];

  for (let i = 0; i < arr.length; i++) {
    const capitalizedWord = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    capitalized.push(capitalizedWord);
  }

  return capitalized;
}

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(item, array) {
  array.push(item);

  return array;
}

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(index, array) {
  if (index >= 0 && index < array.length) {
    array.splice(index, 1);
  }

  return array;
}

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(number) {
  const numStr = String(number);

  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < numStr.length; i++) {
    const digit = parseInt(numStr[i]);

    if (digit % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  return {
    even: evenCount,
    odd: oddCount,
  };
}

// Write a function which takes any number of arguments and return the sum of the arguments
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let userId = '';

  for (let i = 0; i < 7; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    userId += chars[randomIndex];
  }

  return userId;
}
