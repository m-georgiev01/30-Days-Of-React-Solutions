// Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(colorType, numberOfColors) {
  const colors = [];
  for (let i = 0; i < numberOfColors; i++) {
    let color = '';

    if (colorType === 'hex') {
      color = generateRandomHexColor();
    } else if (colorType === 'rgb') {
      color = generateRandomRgbColor();
    } else {
      throw new Error('Invalid colorType. Please use "hex" or "rgb".');
    }
    colors.push(color);
  }
  return colors;

  function generateRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  function generateRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb : ${r}, ${g},${b}`;
  }
}

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(arr) {
  const randomArr = [];
  while (arr.length > 0) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    remove = arr.splice(randomIndex, 1)[0];

    randomArr.push(remove);
  }
  return randomArr;
}

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(facNumber) {
  if (facNumber < 1) return 1;
  return facNumber * factorial(facNumber - 1);
}

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(value) {
  if (
    value === null ||
    value === undefined ||
    (typeof value === 'string' && value.trim() === '') ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === 'object' && Object.keys(value).length === 0)
  ) {
    return true;
  } else {
    return false;
  }
}

// Write a function called average, it takes an array parameter and returns the average of the items.
function average(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const avg = sum / arr.length;

  return avg;
}

// Check if all the array items are number types.If not give return reasonable feedback.
function areAllNumbers(arr) {
  const isAllNumbers = arr.every((item) => typeof item === 'number');
  lt;
  if (isAllNumbers) {
    return console.log('All items are numbers');
  } else {
    return console.log('Not all items are numbers');
  }
}
