const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

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
    const blogs = blogData.map((blog) => 
      blog.get({ plain: true })
      );
    // render on page

    res.render('homepage', {
      blogs,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  /* if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  } */

  res.render('login');
});

module.exports = router;