const { User } = require("../models");
const { Routines } = require("../models");

const routineData = [
  {
    id: 1,
    name: "Routine 1",
    description: "This is a description of the routine",
    workouts: [],
    user_id: 1,
  },
  {
    id: 2,
    name: "Routine 2",
    description: "This is a description of the routine",
    workouts: [],
    user_id: 2,
  },
  {
    id: 3,
    name: "Routine 3",
    description: "This is a description of the routine",
    workouts: [],
    user_id: 3,
  },
  {
    id: 4,
    name: "Routine 4",
    description: "This is a description of the routine",
    workouts: [],
    user_id: 4,
  },
];

const userData = [
  {
    id: 1,
    name: "Joe",
    email: "joe@hotmail.com",
    password: "password12345",
  },
  {
    id: 2,
    name: "Hashim",
    email: "hashim@gmail.com",
    password: "password12345",
  },
  {
    id: 3,
    name: "Dylan",
    email: "dylan@aol.com",
    password: "password12345",
  },
  {
    id: 4,
    name: "Magnus",
    email: "magnus@msn.com",
    password: "password12345",
  },
  {
    id: 5,
    name: "Andrew",
    email: "andrew@yahoo.com",
    password: "password12345",
  },
];

const seedUsers = () => User.bulkCreate(userData);
const seedRoutines = () => Routines.bulkCreate(routineData);

module.exports = seedUsers;
