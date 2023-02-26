const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Post belongs to User, defining foreign key and onDelete method
Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// Post has many comments, defining foreign key and onDelete method
Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

// Comment belongs to User, defining foreign key and onDelete method
Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Comment,
  Post
};