const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

//create blog
router.post('/', withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

//update blog
router.put('/:id', withAuth, async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  try {
    const udpateBlog = await Blog.update(
      {
      ...req.body,
    },
    {
      where: {
        id: req.params.id,
      },
    }
    );

    res.status(200).json(udpateBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete blog
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog found by that ID'});
      return;
    }
    res.status(200).alert('Blog successfully deleted!');
  } catch (error) {
    res.status(500).json(err);
  }
})

module.exports = router;