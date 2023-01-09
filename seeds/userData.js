const { User } = require('../models');

const userData = [
    {
        username: 'testUser',
        email: 'test@test.com',
        password: 'abcd1234',
    },
    {
        username: 'testUser2',
        email: 'test2@test.com',
        password: 'abcd1234',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
