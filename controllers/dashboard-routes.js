const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

// GET all posts for the logged-in user and render them in the all-posts-admin handlebars view
router.get("/", withAuth, (req, res) => {
  Post.findAll({
    where: {
      userId: req.session.userId // Find all posts where the userId matches the id stored in the session
    }
  })
    .then(dbPostData => {
      const posts = dbPostData.map((post) => post.get({ plain: true })); // Map the data to plain JS objects
      
      // Render the all-posts-admin view and pass in the posts data
      res.render("all-posts-admin", {
        layout: "dashboard",
        posts
      });
    })
    .catch(err => {
      console.log(err);
      res.redirect("login");
    });
});

// Render the new-post handlebars view
router.get("/new", withAuth, (req, res) => {
  res.render("new-post", {
    layout: "dashboard"
  });
});

// GET a post by ID for the logged-in user and render the edit-post handlebars view with the post data
router.get("/edit/:id", withAuth, (req, res) => {
  Post.findByPk(req.params.id) // Find a post by its primary key (ID)
    .then(dbPostData => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true }); // Convert the data to a plain JS object
        
        // Render the edit-post view and pass in the post data
        res.render("edit-post", {
          layout: "dashboard",
          post
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;