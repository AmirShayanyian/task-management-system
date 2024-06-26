const { DataTypes } = require('@sequelize/core');
const sequelize = require('../configs/db.config');

const Card = sequelize.define(
  'cards',
  {
    name: { type: DataTypes.STRING },
  },
  { timestamps: true, freezeTableName: true }
);

module.exports = {
  CardModel: Card,
};
