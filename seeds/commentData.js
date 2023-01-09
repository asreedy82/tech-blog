const { Comment } = require('../models');

const commentData = [
    {
        text: 'This is a seeded first comment',
        user_id: 1,
        blog_id: 1,
    },
    {
        text: 'This is a seeded second comment',
        user_id: 1,
        blog_id: 2,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
