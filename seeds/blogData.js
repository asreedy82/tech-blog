const { Blog } = require('../models');

const blogData = [
    {
        title: 'First blog - test',
        text: 'This is a seeded first blog post',
        user_id: 1,
    },
    {
        title: 'Second blog - test',
        text: 'This is a seeded second blog post',
        user_id: 1,
    },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
