const User = require('./User');
const Project = require('./Project');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Project.hasMany(Comment,{
  foreignKey: 'project_id'
});

Comment.belongsTo(User, {
  foreignKey: 'project_id'
})

module.exports = { User, Project, Comment };
