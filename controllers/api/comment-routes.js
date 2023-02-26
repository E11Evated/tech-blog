// Import dependencies
const router = require("express").Router();
const { Comment } = require("../../models/");
const withAuth = require("../../utils/auth");

// Route for creating a new comment
router.post("/", withAuth, (req, res) => {
  // Create a new comment and set the user ID to the current session user
  Comment.create({ ...req.body, userId: req.session.userId })
    .then(newComment => {
      res.json(newComment);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Export the router
module.exports = router;