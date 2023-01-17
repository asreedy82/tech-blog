const router = require('express').Router();
const { async } = require('seed/lib/seed');
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

//get dashboard
router.get('/dashboard', async (res, req) => {
  try {
//get user's blogs
    const userData = await Blog.findAll({
      where: {user_id: req.session.user_id},
      include: [
        { model: User }, 
        { model: Comment },
      ],
    });
    
    const blogs = blogData.map((blog) => 
    blog.get({ plain: true })
    );

    res.render('dashboard', {
      blogs,
    })
  } catch (err) {
    res.status(500).json(err);
  }
})

//get blog
router.get('/blog/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk({
      include: [
        { model: Comment },
        { model: User },
      ],
    });

    const blog = blogData.map((blog) => 
    blog.get({ plain: true })
    );

    res.render('blog', {
      blog,
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;