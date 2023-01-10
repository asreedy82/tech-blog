const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
//const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // get blogs
    const blogData = await Blog.findAll({
      include: [
        { model: User }, 
        { model: Comment },
      ],
    });

    // need to serialize

    // render on page
    res.status(200).json(blogData);
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;