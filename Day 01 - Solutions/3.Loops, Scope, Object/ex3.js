// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties
// and it has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance methods.
//Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
  firstName: 'Ivan',
  lastName: 'Ivanov',
  incomes: [],
  expenses: [],

  addIncome(description, amount) {
    this.incomes.push({ description, amount });
  },

  addExpense(description, amount) {
    this.expenses.push({ description, amount });
  },

  totalIncome() {
    return this.incomes.reduce((total, income) => total + income.amount, 0);
  },

  totalExpense() {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  },

  accountInfo() {
    console.log(
      `FirstName: ${this.firstName}\n  LastName: ${
        this.lastName
      }\n  Incomes: ${this.totalIncome()}\n Expenses: ${this.totalExpense()} `
    );
  },

  accountBalance() {
    const balance = this.totalIncome() - this.totalExpense();
    console.log(`Account Balance: ${balance}`);
  },
};

// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
];

// Imagine you are getting the above users collection from a MongoDB database.
//     a.Create a function called signUp which allows user to add to the collection.If user exists, inform the
//     user that he has already an account.
function signUp(newUser) {
  const userSearched = Object.values(users).find((u) => u._id === newUser._id);

  if (userSearched === undefined) {
    users.push(newUser);
    console.log('User added!');
  } else {
    console.log('User already added!');
  }
}

const user = {
  _id: 'ghderc',
  username: 'Sebastian',
  email: 'Sebastian@Sebastian.com',
  password: '1111',
  createdAt: '08/01/2020 10:00 AM',
  isLoggedIn: false,
};

signUp(user);

//     b. Create a function called signIn which allows user to sign in to the application
function signIn(email, password) {
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    console.log('Sign in successful!');
  } else {
    console.log('Invalid email or password. Please try again.');
  }
}

signIn('aa@aa.com', '11111');

// The products array has three elements and each of them has six properties.
//     a.Create a function called rateProduct which rates the product
function rateProduct(productId, userId, rate) {
  const product = products.find((p) => p._id === productId);

  if (product) {
    const existingRating = product.ratings.find((r) => r.userId === userId);

    if (existingRating) {
      console.log('You have already rated this product.');
    } else {
      product.ratings.push({ userId, rate });
      console.log('Product rated successfully!');
    }
  } else {
    console.log('Product not found.');
  }
}

rateProduct('eedfcf', 'ab12ex', 4);

//     b.Create a function called averageRating which calculate the average rating of a product
function averageRating(product) {
  const ratings = product.ratings.map((r) => r.rate);
  const totalRating = ratings.reduce((sum, rate) => sum + rate, 0);

  if (ratings.length > 0) {
    return totalRating / ratings.length;
  } else {
    return 0;
  }
}

const productToCalculateAverage = products[0];
const avgRating = averageRating(productToCalculateAverage);
console.log(`Average Rating: ${avgRating}`);

// Create a function called likeProduct. This function will helps to like
//to the product if it is not liked and remove like if it was liked.
function likeProduct(productId, userId) {
  const product = products.find((p) => p._id === productId);

  if (!product) {
    console.log('There is no such product!');
  }

  const isLikedByUser = product.likes.find(userId);

  if (isLikedByUser) {
    product.likes.splice(product.likes.indexOf(userId), 1);
    console.log('Like removed!');
  } else {
    product.likes.push(userId);
    console.log('Liked!');
  }
}
