const router = require('express').Router();
const { Blog, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // get blogs
    const blogData = await Blog.findAll({
    });

    // need to serialize

    // render on page
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});