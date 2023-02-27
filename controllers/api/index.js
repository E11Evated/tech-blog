const router = require('express').Router();

// Import required routes for user, post, and comment
const userRoutes = require('./user-routes.js');
const userPostRoutes = require('./userPost-routes');
const commentRoutes = require('./comment-routes');

// Use imported routes for user, post, and comment
router.use('/user', userRoutes);
router.use('/userPost', userPostRoutes);
router.use('/Comment', commentRoutes);

module.exports = router;