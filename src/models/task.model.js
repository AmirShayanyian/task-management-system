const { DataTypes } = require('@sequelize/core');
const sequelize = require('../configs/db.config');

const Task = sequelize.define(
  'tasks',
  {
    title: {
      allowNull: true,
      type: DataTypes.STRING(75),
    },
    description: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('done', 'pending', 'expired', 'not started'),
      allowNull: true,
    },
    task_master: {
      type: DataTypes.INTEGER,
    },
    priority: {
      type: DataTypes.ENUM('High', 'Medium', 'Low'),
    },

    deadline: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Task;
