const { User } = require('../models')
const userData = [
    {
      id: 1,
      "name": "Joe",
      "email": "joe@hotmail.com",
      "password": "password12345"
    },
    {
      id: 2,
      "name": "Hashim",
      "email": "hashim@gmail.com",
      "password": "password12345"
    },
    {
      id: 3,
      "name": "Dylan",
      "email": "dylan@aol.com",
      "password": "password12345"
    },
    {
      id: 4,
      "name": "Magnus",
      "email": "magnus@msn.com",
      "password": "password12345"
    },
    {
      id: 5,
      "name": "Andrew",
      "email": "andrew@yahoo.com",
      "password": "password12345"
    },
  ];

  const seedUsers = () => User.bulkCreate(userData);

  module.exports = seedUsers;