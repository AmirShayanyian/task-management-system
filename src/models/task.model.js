const { DataTypes } = require('@sequelize/core');
const sequelize = require('../configs/db.config');

const Task = sequelize.define(
  'task',
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
    userID: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);
