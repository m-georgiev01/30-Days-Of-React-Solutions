const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

const userArray = Object.values(users);

// Find the person who has many skills in the users object.
console.log(
  userArray.sort((a, b) => b.skills.length - a.skills.length).find((o) => o)
);

// Count logged in users,count users having greater than equal to 50 points from the following object.

const loggedInCount = userArray.filter((user) => user.isLoggedIn).length;

const highPointsCount = userArray.reduce((count, user) => {
  return user.points >= 50 && user.isLoggedIn ? count + 1 : count;
}, 0);

console.log('Logged in users:', loggedInCount);
console.log('Users with greater than or equal to 50 points:', highPointsCount);

// Find people who are MERN stack developer from the users object
console.log(
  Object.entries(users)
    .filter(([_, user]) =>
      user.skills.includes('MongoDB', 'Express', 'React', 'Node')
    )
    .map(([name]) => name)
    .join(', ')
);

// Set your name in the users object without modifying the original users object
const copyUsers = Object.assign({}, users);

copyUsers['Martin'] = {
  email: 'martin@martin.com',
  skills: ['HTML'],
  age: 22,
  isLoggedIn: true,
  points: 51,
};

// Get all keys or properties of users object
Object.keys(users);

// Get all the values of users object
Object.values(users);
