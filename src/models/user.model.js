const { DataTypes } = require('@sequelize/core');
const sequelize = require('../configs/db.config');

const User = sequelize.define(
  'user',
  {
    username: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    mobile: {
      type: DataTypes.STRING(11),
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = {
  UserModel: User,
};
