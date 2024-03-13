const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// Print the price of each product using forEach
products.forEach(({ product, price }) => {
  console.log(product + ' ' + price);
});

// Print the product items as follows using forEach
products.forEach(({ product, price }) => {
  if (typeof price === 'number' && !isNaN(price)) {
    console.log(`The price of ${product} is ${price} euros.`);
  } else {
    console.log(`The price of ${product} is unknown`);
  }
});

// Calculate the sum of all the prices using forEach
let sum = 0;
products.forEach((total) => {
  const { price } = total;
  if (typeof price === 'number' && !isNaN(price)) {
    sum += price;
  }
});
console.log(`${sum}`);

// Filter products with prices
const priceFiltered = products.filter(
  (product) => !isNaN(product.price) && product.price !== ''
);

// Use method chaining to get the sum of the prices(map, filter, reduce)
const totalPrice = products
  .filter((product) => !isNaN(product.price) && product.price !== '')
  .map((product) => parseFloat(product.price))
  .reduce((sum, price) => sum + price, 0);

// Calculate the sum of all the prices using reduce only
const totalReduce = products.reduce((sum, product) => {
  const price = parseFloat(product.price);
  return !isNaN(price) ? sum + price : sum;
}, 0);

// Find the first product which doesn't have a price value
const find = products.find(
  (product) => isNaN(parseFloat(product.price)) || product.price === ''
);

// Find the index of the first product which does not have price value
const findIndex = products.findIndex(
  (product) => isNaN(parseFloat(product.price)) || product.price === ''
);

// Check if some products do not have a price value
const some = products.some(
  (products) => isNaN(parseFloat(products.price)) || products.price
);

// Check if all the products have price value
const every = products.every(
  (products) => !isNaN(products.price) && products.price !== ''
);
