const { DataTypes } = require('@sequelize/core');
const sequelize = require('../configs/db.config');

const Board = sequelize.define(
  'Boards',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    task_count: {
      type: DataTypes.INTEGER,
    },
    completed_task: {
      type: DataTypes.INTEGER,
    },
    task_master: {
      //
    },
  },
  { timestamps: true, freezeTableName: true }
);

module.exports = {
  BoardModel: Board,
};
