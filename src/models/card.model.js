const { DataTypes } = require('@sequelize/core');
const sequelize = require('../configs/db.config');

const Card = sequelize.define(
  'cards',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    card_back_color: { type: DataTypes.STRING(6) },
    car_fore_color: { type: DataTypes.STRING(6) },
    task_count: { type: DataTypes.INTEGER },
    completed_task: { type: DataTypes.INTEGER },
  },
  { timestamps: true, freezeTableName: true }
);

module.exports = Card;
