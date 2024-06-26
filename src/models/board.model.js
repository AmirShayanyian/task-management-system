const { DataTypes } = require('@sequelize/core');
const sequelize = require('../configs/db.config');
const { ProjectModel } = require('./project.model');

const Board = sequelize.define(
  'Boards',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    card_count: {
      type: DataTypes.INTEGER,
    },
    completed_card: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: true, freezeTableName: true }
);

module.exports = Board;
