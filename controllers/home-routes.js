const router = require("express").Router();
const { Post, Comment, User } = require("../models");

// Get all posts for homepage
router.get("/", (req, res) => {
  Post.findAll({
    // Include User model
    include: [User],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("all-posts", { posts });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Get a single post with comments and user data
router.get("/post/:id", (req, res) => {
  Post.findByPk(req.params.id, {
    include: [
      User, // Include User model
      {
        model: Comment,
        include: [User], // Include User model for each comment
      },
    ],
  })
    .then((dbPostData) => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });

        res.render("single-post", { post });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Render login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// Render sign up page
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;