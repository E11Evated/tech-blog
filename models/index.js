const User = require('./User');
const UserPost = require('./userPost');
const Comment = require('./Comment');

// Post belongs to User, defining foreign key and onDelete method
UserPost.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// Post has many comments, defining foreign key and onDelete method
UserPost.hasMany(Comment, {
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
  UserPost
};