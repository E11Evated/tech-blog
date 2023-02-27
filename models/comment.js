// Import required modules
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// Define Comment model by extending Model class
class Comment extends Model {}
// Initialize Comment model, specifying the attributes and their data types
Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize
  }
);

// Export Comment model
module.exports = Comment;