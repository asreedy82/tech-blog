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
router.get('/dashboard', withAuth, async (res, req, next) => {
  try {
//get user's blogs
    const userData = await Blog.findAll({
      where: {user_id: req.session.user_id},
      include: [
        { model: User }, 
        { model: Comment },
      ],
    });
    console.log(req.session.user_id);
    const blogs = blogData.map((blog) => 
    blog.get({ plain: true })
    );

    res.render('dashboard', {
      blogs, 
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//get blog
router.get('/blog/:id', withAuth, async (req, res) => {
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
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err)
  }
});

//get user for main
/* router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      where: {id: req.session.user_id},
    });

    const userName = userData.map((userName) =>
    userName.get({ plain: true})
    );

    res.render('main', {
      userName,
    });
  } catch (err) {
    res.status(500).json(err)
  }
}); */

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;