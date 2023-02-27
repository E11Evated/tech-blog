// Import the necessary libraries
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define the Post model
class Post extends Model {}

// Define the Post table structure
Post.init(
  {
    title: DataTypes.STRING,  // Column for the post title
    body: DataTypes.STRING    // Column for the post body
  },
  {
    sequelize   // Connect to the database using the Sequelize instance
  }
);

// Export the Post model for use in other files
module.exports = UserPost;