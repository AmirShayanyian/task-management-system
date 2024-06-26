const User = require('../models/user.model');
const Board = require('../models/board.model');
const Project = require('../models/project.model');
const Task = require('../models/task.model');
const Card = require('../models/card.model');
const sequelize = require('./db.config');

const mmd = () => {
  Project.hasMany(Board, { as: 'boards' });
  Board.hasMany(Card, { as: 'cards' });
  Card.hasMany(Task, { as: 'tasks' });
  User.belongsToMany(Task, { through: 'user_task' });
  Task.belongsToMany(User, { through: 'user_task' });
  sequelize.sync({ force: true });
};
module.exports = mmd;
