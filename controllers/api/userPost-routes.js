// Require necessary dependencies and models
const router = require("express").Router();
const { UserPost, Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");

// Route for creating a new post
router.post("/", withAuth, (req, res) => {
  const body = req.body;
  console.log(req.session.userId);
  // Create a new post and assign its user ID to the session user ID
  UserPost.create({ ...body, userId: req.session.userId })
    .then(newPost => {
      res.json(newPost);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Route for updating an existing post
router.put("/:id", withAuth, (req, res) => {
  console.log(req.body, req.params.id)
  // Update post with specified ID and body from request
  UserPost.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(affectedRows => {
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Route for deleting an existing post
router.delete("/:id", withAuth, (req, res) => {
  console.log(req.body, req.params.id)
  // Delete post with specified ID
  UserPost.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(affectedRows => {
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Export the router
module.exports = router;